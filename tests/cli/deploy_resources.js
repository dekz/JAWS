'use strict';

/**
 * JAWS Test: Deploy Resources
 */

var Jaws = require('../../lib/index.js'),
    CmdDeployResources = require('../../lib/commands/deploy_resources'),
    CmdTag = require('../../lib/commands/tag'),
    JawsError = require('../../lib/jaws-error'),
    testUtils = require('../test_utils'),
    Promise = require('bluebird'),
    path = require('path'),
    assert = require('chai').assert,
    config = require('../config'),
    lambdaPaths = {},
    projPath,
    JAWS;

describe('Test deploy resources command', function() {

  before(function(done) {
    testUtils.createTestProject(
        config.name,
        config.region,
        config.stage,
        config.iamRoleArnLambda,
        config.iamRoleArnApiGateway,
        config.usEast1Bucket)
        .then(function(pp) {
          projPath = pp;
          process.chdir(path.join(projPath));
          JAWS = new Jaws();
        })
        .then(done);
  });

  describe('Positive tests', function() {

    it('Deploy Resources', function(done) {

      this.timeout(0);

      CmdDeployResources.run(JAWS, config.stage, config.region)
          .then(function() {
            done();
          })
          .catch(JawsError, function(e) {
            done(e);
          })
          .error(function(e) {
            console.log(e);
            done(e);
          });
    });
  });
});