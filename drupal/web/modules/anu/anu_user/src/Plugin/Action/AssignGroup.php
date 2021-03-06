<?php

namespace Drupal\anu_user\Plugin\Action;

use Drupal\Core\Form\FormStateInterface;
use Drupal\views_bulk_operations\Action\ViewsBulkOperationsActionBase;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Assigns chosen groups to the selected users.
 *
 * @Action(
 *   id = "anu_assign_group",
 *   label = @Translation("Assign Classes to the selected users"),
 *   type = "user",
 *   requirements = {
 *     "_permission" = "add members to class",
 *   },
 * )
 */
class AssignGroup extends ViewsBulkOperationsActionBase {

  use StringTranslationTrait;

  /**
   * {@inheritdoc}
   */
  public function execute($entity = NULL) {
    $user_roles = $entity->getRoles(TRUE);

    $groups = \Drupal::entityTypeManager()
      ->getStorage('group')
      ->loadMultiple($this->configuration['classes']);

    foreach ($groups as $group) {
      // Assign teacher role inside the class if user is a teacher.
      $values = in_array('teacher', $user_roles) ? ['group_roles' => ['class-admin']] : [];
      $group->addMember($entity, $values);
    }
  }

  /**
   * {@inheritdoc}
   */
  public function access($entity, AccountInterface $account = NULL, $return_as_object = FALSE) {

    $groups = \Drupal::entityTypeManager()
      ->getStorage('group')
      ->loadMultiple($this->configuration['classes']);

    foreach ($groups as $group) {
      if (!$group->access('update')) {
        return FALSE;
      }
    }

    return TRUE;
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {

    $groups = \Drupal::entityTypeManager()
      ->getStorage('group')
      ->loadMultiple();

    $group_list = [];
    foreach ($groups as $group) {
      if ($group->access('update')) {
        $group_list[$group->id()] = $group->label();
      }
    }

    $form['classes'] = [
      '#title' => t('Choose the Classes to assign to the selected users:'),
      '#type' => 'checkboxes',
      '#options' => $group_list,
    ];

    return $form;
  }

}
