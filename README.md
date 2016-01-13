AsyncShell
==========


[AsyncShell](http://github.com/carrascoMDD/asyncshell) is an end-to-end test framework, 
declarative through JSON test specifications, 
fully instrumented for detailed observation, 
and fully asynchronous through callbacks.
AsyncShell includes out of the box components to test HTTP end-points and JSON APIs, as well as dynamic HTML and [AngularJS](http://angularjs.org/) applications, and filesystem content and operations.
AsyncShell is a [Node.js](http://nodejs.org/) program, and delegates into [Protractor](http://angular.github.io/protractor) to test AngularJS applications, itself built on top of [WebDriverJS](https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs).


Compatibility
-------------

AsyncShell is compatible with Node.js from v0.10 to v4 and newer.



Declarative
-----------

AsyncShell is declarative, as opposed to other test imperative test frameworks, 
such that AsyncShell can be integrated into rich software factory pipelines, 
where tests can be produced and reasoned upon with other toolsets, for example Model-Driven. 

AsyncTest tests are JSON objects which may be supplied as text files, or produced and injected from memory on the fly. 
AsyncShell JSON tests are parsed according to a well defined syntax, representing a Domain Specific Language for tests.


Nested environments
-------------------

Each individual test operates on its own environment populated with properties, optionally with default values, 
and where new properties and values can be exported from the execution of the test.

When an individual test attempts to resolve the value of an environment property,
its own environment is examined firts, and if it holds no resolution for the property,
the environments of calling tests are examined in order climbing up the test invocation tree.

A global environment allows to set and resolve property values as the last chance available to all tests.


Suites of suites
----------------

AsyncTests may be launched individually, or in whole collections, or collections of collections, which may be launched for repeated number of times.
Even when the tests are arranged in a deep tree, AsyncShell allows to flatten the tree of individual tests, 
and launch the tests in a randomized order.


Asynchronous with Callbacks
---------------------------

AsyncShell asynchronicity is implemented directly with Javascript callbacks, 
following the Node.js convention (error, data),
and avoids third party promise facilities, which are not so thorougly instrumented.

Even if ES6 include promises out of the box, AsyncShell still relies on pure callback machinery,
the promise pattern only chains promises "after-the-fact" (of launching the async fragment), 
making dificult to observe the chain of expected asynchronous delegations while it is constructed.


Instrumented
------------

AsyncShell is instrumented to record all significant activity during the test.
Because AsyncShell shall serve the purpose of assessing the quality of other pieces of software,
the operation of the tests can also be assessed.

AsyncShell records all instances of individual tests, test steps, pre-requisite tests, and sub-steps.
AsyncShell records all start, end, sucess and failures while testing. 
AsyncShell records the events about callbacks: set up, continuation invocation and optionally receiving a callback as argument.
AsyncShell records every HTTP interaction, including request and reply payloads.

While all activity is recorded, only specific event kinds configured in JSON files are presented on the console.


Memory management
-----------------

Because longer test runs may consume lots of memory, 
AsyncShell includes memory management facilities to collect garbage, 
and to selectively discard test configurations,
test instances, test instance variables, callbacks, callback arguments, events, and event info.


 



