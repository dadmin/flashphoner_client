'use strict';

/**
 * @namespace Flashphoner.constants.SESSION_STATUS
 * @see Session
 */
var sessionStatus = {};

/**
 * Fires when {@link Session} ws socket opens
 * @event CONNECTED
 * @memberof Flashphoner.constants.SESSION_STATUS
 */
define(sessionStatus, 'CONNECTED', 'CONNECTED');

/**
 * Fires when {@link Session} receives connect ack from REST App
 * @event ESTABLISHED
 * @memberof Flashphoner.constants.SESSION_STATUS
 */
define(sessionStatus, 'ESTABLISHED', 'ESTABLISHED');

/**
 * Fires when {@link Session} disconnects
 * @event DISCONNECTED
 * @memberof Flashphoner.constants.SESSION_STATUS
 */
define(sessionStatus, 'DISCONNECTED', 'DISCONNECTED');

/**
 * Fires if {@link Session} connection failed.
 * Some of the reasons can be network connection failed, REST App failed
 * @event FAILED
 * @memberof Flashphoner.constants.SESSION_STATUS
 */
define(sessionStatus, 'FAILED', 'FAILED');

//State of newly created Session
define(sessionStatus, 'PENDING', 'PENDING');


/**
 * @namespace Flashphoner.constants.STREAM_STATUS
 * @see Stream
 */
var streamStatus = {};
//State of newly created Stream
define(streamStatus, 'NEW', 'NEW');
//todo remove?
define(streamStatus, 'PENDING', 'PENDING');

/**
 * Fires when {@link Stream} starts publishing
 * @event PUBLISHING
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'PUBLISHING', 'PUBLISHING');

/**
 * Fires when {@link Stream} starts playing
 * @event PLAYING
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'PLAYING', 'PLAYING');

/**
 * Fires if {@link Stream} paused
 * @event PAUSED
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'PAUSED', 'PAUSED');

/**
 * Fires if {@link Stream} was unpublished
 * @event UNPUBLISHING
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'UNPUBLISHED', 'UNPUBLISHED');

/**
 * Fires if {@link Stream} was stopped
 * @event STOPPED
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'STOPPED', 'STOPPED');

/**
 * Fires if {@link Stream} failed
 * @event FAILED
 * @memberof Flashphoner.constants.STREAM_STATUS
 */
define(streamStatus, 'FAILED', 'FAILED');

var constants = {};
define(constants, 'SESSION_STATUS', sessionStatus);
define(constants, 'STREAM_STATUS', streamStatus);

//define helper
function define(obj, name, value) {
    Object.defineProperty(obj, name, {
        value:      value,
        enumerable: true
    });
}

module.exports = constants;