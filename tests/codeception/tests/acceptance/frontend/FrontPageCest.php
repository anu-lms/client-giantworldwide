<?php

namespace frontend;

/**
 * Class FrontPageCest
 *
 * @group frontend
 */
class FrontPageCest {

  public function testGTM(\Step\Acceptance\Learner $I) {
    $GTM_ID = 'GTM-TQKXJR8';

    $I->amOnPage('/');
    $I->expectTo('see GTM container on site in stage mode.');
    $I->seeInPageSource("id=$GTM_ID");
    $I->seeInPageSource("gtm_preview=env-5");
    $I->waitForJS("return google_tag_manager['$GTM_ID'] != undefined;");
  }

}
