/// <reference path="grunt.d.ts" />

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    build: {
      src: 'src/<%= pkg.name %>.js',
      dest: 'build/<%= pkg.name %>.min.js'
    }
  }
});


  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

grunt.config.init({
  jshint: {
    all: ['lib/*.js', 'test/*.js', 'Gruntfile.js']
  }
});


declare var doSomethingThatThrowsAnExceptionOnError: any;
grunt.registerTask('something', 'Do something interesting.', function(arg) {
  var msg = 'Doing something...';
  grunt.verbose.write(msg);
  try {
    doSomethingThatThrowsAnExceptionOnError(arg);
    // Success!
    grunt.verbose.ok();
  } catch(e) {
    // Something went wrong.
    grunt.verbose.or.write(msg).error().error(e.message);
    grunt.fail.warn('Something went wrong.');
  }
});


grunt.initConfig({
  compass: {
   dev: {
     options: {
       /* ... */
       outputStyle: 'expanded'
      },
    },
    staging: {
      options: {
        /* ... */
        outputStyle: 'compressed'
      },
    },
  },
});
var target = grunt.option('target') || 'dev';
grunt.registerTask('deploy', ['compass:' + target]);



grunt.registerTask('upload', 'Upload code to specified target.', function(n) {
  var target = grunt.option('target');
  // do something useful with target here
});
grunt.registerTask('deploy', ['validate', 'upload']);

grunt.option('staging', false);
var isDev = grunt.option('no-staging');
// isDev === true

declare var task: grunt.task;
task.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

task.registerTask('dist', ['concat:dist', 'uglify:dist']);

grunt.task.registerTask('foo', 'A sample task that logs stuff.', function(arg1, arg2) {
  if (arguments.length === 0) {
    grunt.log.writeln(this.name + ", no args");
  } else {
    grunt.log.writeln(this.name + ", " + arg1 + " " + arg2);
  }
});

grunt.initConfig({
  log: {
    foo: [1, 2, 3],
    bar: 'hello world',
    baz: false
  }
});

grunt.task.registerMultiTask('log', 'Log stuff.', function() {
  grunt.log.writeln(this.target + ': ' + this.data);
});




declare var doSomething: Function;
declare var lint: any;
grunt.task.registerTask('Inside Task', 'Example for "this" inside tasks', function(){

var _this: grunt.InsideTask = this;

// Tell Grunt this task is asynchronous.
var done = _this.async();
// Your async code.
setTimeout(function() {
  // Let's simulate an error, sometimes.
  var success = Math.random() > 0.5;
  // All done!
  done(success);
}, 1000);



var options = this.options({
  enabled: false,
});

doSomething(options.enabled);



});

grunt.task.registerMultiTask('Inside Multi Task', 'test', function() {
  this.files.forEach(function(file) {
  var contents = file.src.filter(function(filepath) {
    // Remove nonexistent files (it's up to you to filter or warn here).
    if (!grunt.file.exists(filepath)) {
      grunt.log.warn('Source file "' + filepath + '" not found.');
      return false;
    } else {
      return true;
    }
  }).map(function(filepath) {
    // Read and return the file's source.
    return grunt.file.read(filepath);
  }).join('\n');
  // Write joined contents to destination filepath.
  grunt.file.write(file.dest, contents);
  // Print a success message.
  grunt.log.writeln('File "' + file.dest + '" created.');
});


// Lint specified files.
var files = this.filesSrc;
var errorCount = 0;
files.forEach(function(filepath) {
  if (!lint(grunt.file.read(filepath))) {
    errorCount++;
  }
});

// Fail task if errors were logged.
if (errorCount > 0) { return false; }

// Otherwise, print a success message.
grunt.log.ok('Files lint free: ' + files.length);

});





declare var module: any;


(module).exports = function(grunt: grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);

};




/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */
(module).exports = function(grunt: grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    uglify: {
      compress: {
        files: {
          'tmp/compress.js': ['test/fixtures/src/simple.js']
        },
        options: {
          mangle: false
        }
      },
      compress_mangle: {
        files: {
          'tmp/compress_mangle.js': ['test/fixtures/src/simple.js']
        }
      },
      compress_mangle_except: {
        files: {
          'tmp/compress_mangle_except.js': ['test/fixtures/src/simple.js']
        },
        options: {
          mangle: {
            except: ['argumentC']
          }
        }
      },
      compress_mangle_beautify: {
        files: {
          'tmp/compress_mangle_beautify.js': ['test/fixtures/src/simple.js']
        },
        options: {
          beautify: true
        }
      },
      multifile: {
        files: {
          'tmp/multifile.js': ['test/fixtures/src/simple.js','test/fixtures/src/comments.js']
        },
        options: {
          mangle: false
        }
      },
      compress_mangle_sourcemap: {
        files: {
          '/dev/null': ['test/fixtures/src/simple.js']
        },
        options: {
          sourceMap: 'tmp/compress_mangle_sourcemap'
        }
      },
      sourcemapin: {
        files: {
          'tmp/sourcemapin.js': ['test/fixtures/src/simple2.js']
        },
        options: {
          mangle : false,
          sourceMap: 'tmp/sourcemapin',
          sourceMapIn: 'test/fixtures/src/simple2.map',
          sourceMapRoot: 'http://local.host/js/'
        }
      },
      sourcemapurl: {
        files: {
          'tmp/sourcemapurl.js': ['test/fixtures/src/simple.js']
        },
        options: {
          sourceMappingURL: 'js/sourcemapurl.js.map'
        }
      },
      comments: {
        src: 'test/fixtures/src/comments.js',
        dest: 'tmp/comments.js',
        options: {
          mangle: false,
          preserveComments: 'some'
        }
      },
      wrap: {
        src: 'test/fixtures/src/simple.js',
        dest: 'tmp/wrap.js',
        options: {
          mangle: false,
          wrap: 'testExport'
        }
      },
      exportAll: {
        src: 'test/fixtures/src/simple.js',
        dest: 'tmp/exportAll.js',
        options: {
          mangle: false,
          wrap: 'testExport',
          exportAll: true
        }
      },
      sourcemap_prefix: {
        files: {
          '/dev/null': ['test/fixtures/src/simple.js']
        },
        options: {
          sourceMap: 'tmp/sourcemap_prefix',
          sourceMapPrefix: 3
        }
      },
      multiple_sourcemaps: {
        files: {
          'tmp/multiple_sourcemaps1.js': ['test/fixtures/src/simple.js'],
          'tmp/multiple_sourcemaps2.js': ['test/fixtures/src/comments.js']
        },
        options: {
          sourceMap: function(dest) {
            return dest.replace(/\.js$/,".map");
          },
          sourceMappingURL: function(dest) {
            return dest.replace(/\.js$/,".mapurl");
          }
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'uglify', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};




/*
 * grunt-contrib-qunit
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

(module).exports = function(grunt: grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Create a local web server for testing http:// URIs.
    connect: {
      root_server: {
        options: {
          port: 9000,
          base: '.',
        },
      },
      test_server: {
        options: {
          port: 9001,
          base: 'test',
        },
      }
    },

    // Unit tests.
    qunit: {
      all_tests: ['test/*{1,2}.html'],
      individual_tests: {
        files: [
          {src: 'test/*1.html'},
          {src: 'test/*{1,2}.html'},
        ]
      },
      urls: {
        options: {
          urls: [
            'http://localhost:9000/test/qunit1.html',
            'http://localhost:9001/qunit2.html',
          ]
        },
      },
      urls_and_files: {
        options: {
          urls: '<%= qunit.urls.options.urls %>',
        },
        src: 'test/*{1,2}.html',
      },
    }

  });

  // Build a mapping of url success counters.
  var successes = {};
  var currentUrl;
  grunt.event.on('qunit.spawn', function(url) {
    currentUrl = url;
    if (!successes[currentUrl]) { successes[currentUrl] = 0; }
  });
  grunt.event.on('qunit.done', function(failed, passed) {
    if (failed === 0 && passed === 2) { successes[currentUrl]++; }
  });

  grunt.registerTask('really-test', 'Test to see if qunit task actually worked.', function() {
    var assert = require('assert');
    var difflet = require('difflet')({indent: 2, comment: true});
    var actual = successes;
    var expected = {
      'test/qunit1.html': 3,
      'test/qunit2.html': 3,
      'http://localhost:9000/test/qunit1.html': 2,
      'http://localhost:9001/qunit2.html': 2
    };
    try {
      assert.deepEqual(actual, expected, 'Actual should match expected.');
    } catch (err) {
      grunt.log.subhead('Actual should match expected.');
      console.log(difflet.compare(expected, actual));
      throw new Error(err.message);
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, run some basic tests.
  grunt.registerTask('test', ['connect', 'qunit', 'really-test']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};


/*
 * grunt-contrib-concat
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

(module).exports = function(grunt: grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    banner_property: 'AWESOME',
    concat: {
      default_options: {
        files: {
          'tmp/default_options': ['test/fixtures/file1', 'test/fixtures/file2']
        }
      },
      custom_options: {
        options: {
          separator: '\n;\n',
          banner: '/* THIS TEST IS <%= banner_property %> */\n',
          footer: 'dude'
        },
        files: {
          'tmp/custom_options': ['test/fixtures/file1', 'test/fixtures/file2']
        }
      },
      handling_invalid_files: {
        src: ['test/fixtures/file1', 'invalid_file/should_warn/but_not_fail', 'test/fixtures/file2'],
        dest: 'tmp/handling_invalid_files',
        nonull: true,
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'concat', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};





/*
 * grunt-contrib-jshint
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

(module).exports = function(grunt: grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all_files: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      individual_files: {
        files: [
          {src: 'Gruntfile.js'},
          {src: 'tasks/*.js'},
          {src: '<%= nodeunit.tests %>'},
        ]
      },
      options: {
        jshintrc: '.jshintrc',
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // Whenever the "test" task is run, run the "nodeunit" task.
  grunt.registerTask('test', ['nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);

};




/*
 * grunt-contrib-watch
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-contrib-watch/blob/master/LICENSE-MIT
 */

'use strict';

(module).exports = function(grunt: grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Watch
    watch: {
      all: {
        files: ['<%= jshint.all %>'],
        tasks: ['jshint', 'nodeunit'],
        options: {interrupt: true}
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/tasks/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'build-contrib']);

};