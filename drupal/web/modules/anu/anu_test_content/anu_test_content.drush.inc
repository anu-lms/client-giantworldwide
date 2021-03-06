<?php

/**
 * @file
 * File with drush commands for the module.
 */

use Drupal\user\Entity\User;

/**
 * Implements hook_drush_command().
 */
function anu_test_content_drush_command() {

  $commands['tests_cleanup'] = [
    'description' => 'Delete all the entities created by test suite.',
    'aliases' => ['tc'],
    'examples' => [
      'drush tc' => 'Delete all the entities created by test suite.',
    ],
  ];

  return $commands;
}

/**
 * Drush command logic. drush_[MODULE_NAME]_[COMMAND_NAME]().
 *
 * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
 * @throws \Drupal\Core\Entity\EntityStorageException
 */
function drush_anu_test_content_tests_cleanup() {

  module_load_include('install', 'anu_test_content');

  $test_users = anu_test_get_test_users();
  $entities_to_delete = ['paragraph_comment', 'message', 'notebook'];

  /* @var $user \Drupal\user\Entity\User */
  foreach ($test_users as $user) {
    foreach ($entities_to_delete as $entityTypeId) {
      anu_test_content_entities_delete($user, $entityTypeId);
    }
  }

  drush_print('Tests cleanup finished.');
}

/**
 * Deletes all the entities belong to $user.
 *
 * @param \Drupal\user\Entity\User $user
 *   User object.
 * @param string $entityTypeId
 *   Name of entity type.
 *
 * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
 * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
 * @throws \Drupal\Core\Entity\EntityStorageException
 */
function anu_test_content_entities_delete(User $user, $entityTypeId) {

  $ids = \Drupal::entityQuery($entityTypeId)
    ->condition('uid', $user->id())
    ->execute();

  $controller = \Drupal::entityTypeManager()->getStorage($entityTypeId);
  $entities = $controller->loadMultiple($ids);
  $controller->delete($entities);
}
