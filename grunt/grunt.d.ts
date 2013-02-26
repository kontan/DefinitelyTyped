// Type definitions for Grunt
// Project: http://gruntjs.com/
// Definitions by: Kon <http://phyzkit.net/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

module grunt{

    // Config /////////////////////////////////////////////////

    /**
     * This method is an alias for the grunt.config.init method.
     */
    function initConfig(configObject: any);

    // Creating Task //////////////////////////////////////////

    /**
     * This method is an alias for the grunt.task.registerTask method.
     */
    function registerTask(taskName: string, taskList: string[]): void;
    function registerTask(taskName: string, description: string, taskFunction: (...args:any[])=>void): void;

    /**
     * This method is an alias for the grunt.task.registerMultiTask method.
     */
    function registerMultiTask(taskName: string, description: string, taskFunction: ()=>void): void;


    /**
     * This method is an alias for the grunt.task.renameTask method.
     */
    function renameTask(oldname: string, newname: string): void;


    // Loading Externally-Defined Tasks /////////////////////////////////

    /**
     * This method is an alias for the grunt.task.loadTasks method.
     */
    function loadTasks(tasksPath: string): void;

    /**
     * This method is an alias for the grunt.task.loadNpmTasks method.
     */
    function loadNpmTasks(pluginName: string): void;

    // Warnings and Fatal Errors ////////////////////////////////////////

    /**
     * This method is an alias for the grunt.fail.warn method.
     */
    function warn(error:string, errorcode?: number): void;
    function warn(error:Error, errorcode?: number): void;

    /**
     * This method is an alias for the grunt.fail.fatal method.
     */
    //
    // Confricting "module fail"
    //function fail(error:string, errorcode?: number): void;
    //function fail(error:Error, errorcode?: number): void;

    // Command-line Options //////////////////////////////////////////////

    /**
     * Retrieve the value of a command-line option, eg. debug. Note that for each command-line option, the inverse can be tested, eg. no-debug.
     */

    // 
    //  Conflicts "module option" !
    // 
    // function option(optionName: string): void;


    // Miscellaneous /////////////////////////////////////////////////////

    /**
     * The current grunt package.json metadata, as an object.
     */
    var package: any;

    /**
     * The current grunt version, as a string. This is just a shortcut to the grunt.package.version property.
     */
    var version: string;


    /**
     * Access project-specific configuration data defined in the Gruntfile.
     * 
     * Note that any method marked with a ☃ (unicode snowman) is also available directly on the grunt object, and any method marked with a ☆ (white star) is also available inside tasks on the this object. Just so you know.
     */
    module config{
        
        // Initializing Config Data /////////////////////////////////////////////////////////

        /**
         * ☃ Initialize a configuration object for the current project. The specified `configObject` is used by tasks and can be accessed using the `grunt.config` method. Nearly every project's Gruntfile will call this method.
         *
         * Note that any specified `&lt;% %&gt;` template strings will be processed when config data is retrieved.
         *
         * This example contains sample config data for the [grunt-contrib-jshint plugin](https://github.com/gruntjs/grunt-contrib-jshint) `jshint` task:
         * 
         *     grunt.config.init({
         *         jshint: {
         *             all: ['lib/*.js', 'test/*.js', 'Gruntfile.js']
         *         }
         *     });
         *
         * See the [Getting started](http://gruntjs.com/getting-started/) guide for more configuration examples.
         *
         * This method is also available as `grunt.initConfig`.
         */
        function init(configObject: any): void;

        // Accessing Config Data ////////////////////////////////////////////////////////////

        // The following methods allow grunt configuration data to be accessed either via dot-delimited string like 'pkg.author.name' or via array of property name parts like ['pkg', 'author', 'name'].
        //
        // Note that if a specified property name contains a . dot, it must be escaped with a literal backslash, eg. 'concat.dist/built\\.js'. If an array of parts is specified, grunt will handle the escaping internally with the grunt.config.escape method.

        /**
         * Get or set a value from the project's grunt configuration. This method serves as an alias to other methods; if two arguments are passed, grunt.config.set is called, otherwise grunt.config.get is called.
         */
        function config(prop?: any, value?: any): any;

        /**
         * Get a value from the project's grunt configuration. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned. Templates strings will be recursively processed using the grunt.config.process method.
         */
        function get(prop?: any): any;

        /**
         * Process a value, recursively expanding <% %> templates (via the grunt.template.process method) in the context of the grunt config, as they are encountered. this method is called automatically by grunt.config.get but not by grunt.config.getRaw.
         *
         * If any retrieved value is entirely a single '<%= foo %>' or '<%= foo.bar %>' template string, and the specified foo or foo.bar property is a non-string (and not null or undefined) value, it will be expanded to the actual value. That, combined with grunt's task system automatically flattening arrays, can be extremely useful.
         */
        function process(value: any): void; 

        /**
         * Get a raw value from the project's grunt configuration, without processing <% %> template strings. If prop is specified, that property's value is returned, or null if that property is not defined. If prop isn't specified, a copy of the entire config object is returned.
         */
        function getRaw(prop?: any): any;

        /**
         * Set a value into the project's grunt configuration.
         *
         * Note that any specified <% %> template strings will only be processed when config data is retrieved.
         */
        function set(prop: any, value: any): void;

        /**
         * Escape . dots in the given propString. This should be used for property names that contain dots.
         */
        function escape(propString: string): string;    

        // Requiring Config Data /////////////////////////////////////////////////////////////////////////

        /**
         * Fail the current task if one or more required config properties is missing, null or undefined. One or more string or array config properties may be specified.
         *
         * This method is also available inside tasks as `this.requiresConfig`.
         *
         * *Note this the method is also available inside tasks on the `this` object as `this.requiresConfig`*.
         */
        function requires(prop:any, ...props:any[]): void;

    }


    /**
     * Even though only the most relevant methods are listed on this page, the full [EventEmitter2 API](https://github.com/hij1nx/eventemitter2) is available on the `grunt.event` object. Event namespaces may be specified with the `.` (dot) separator, and namespace wildcards have been enabled.
     *
     * *Note that grunt doesn't yet emit any events, but can still be useful in your own tasks.*
     */
    module event{
        /**
         * Adds a listener to the end of the listeners array for the specified event.
         */
        function on(event: string, listener: Function): void;

        /**
         * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
         */
        function once(event: string, listener: Function): void;

        /**
         * Adds a listener that will execute n times for the event before being removed.
         */
        function many(event: string, timesToListen:number, listener: Function): void;        

        /**
         * Remove a listener from the listener array for the specified event.
         */
        function off(event: string, listener: Function): void;

        /**
         * Removes all listeners, or those of the specified event.
         */
        function removeAllListener(event?: string): void;

        /**
         * Execute each of the listeners that may be listening for the specified event name in order with the list of arguments.
         */
        function emit(event: string, arg1?: any, arg2?: any): void; 
    }


    /**
     * For when something goes horribly wrong.
     *
     * See the [fail lib](https://github.com/gruntjs/grunt/blob/master/lib/grunt/fail.js) source for more information.
     *
     * If something explodes (or is about to explode) inside a task, it can force grunt to abort. See the exit codes [documentation](http://gruntjs.com/exit-codes) for a list of all built-in grunt exit codes.
     *
     * Note that any method marked with a ☃ (unicode snowman) is also available directly on the grunt object. Just so you know. See the [API main page](http://gruntjs.com/grunt) for more usage information.
     */
    module fail{

    	/**
	     * This method is an alias for the grunt.fail.fatal method.
	     */
		function(error:string, errorcode?: number): void;
    	function(error:Error, errorcode?: number): void;

        /**
         * ☃
         *
         * Display a warning and abort grunt immediately. Grunt will continue processing tasks if the `--force` command-line option was specified. The `error` argument can be a string message or an error object.
         *
         * If `--debug 9` is specified on the command-line and an error object was specified, a stack trace will be logged.
         *
         * This method is also available as `grunt.warn`.
         */
        function warn(error: string, errorcode?: number): void;
        function warn(error: Error, errorcode?: number): void;

        /**
         * ☃
         *
         * Display a warning and abort grunt immediately. The `error` argument can be a string message or an error object.
         *
         * If `--debug 9` is specified on the command-line and an error object was specified, a stack trace will be logged.
         *
         * A beep is emitted on fatal unless the --no-color option is specified.
         *
         * *This method is also available as `grunt.fatal`.*
         */
        function fatal(error: string, errorcode?: number): void;
        function fatal(error: Error, errorcode?: number): void;
    }


    /**
     * There are many provided methods for reading and writing files, traversing the filesystem and finding files by matching globbing patterns. Many of these methods are wrappers around built-in Node.js file functionality, but with additional error handling, logging and character encoding normalization.
     *
     * Note: all file paths are relative to the Gruntfile unless the current working directory is changed with grunt.file.setBase or the --base command-line option.
     *
     * # External libraries
     * 
     * ## grunt.file.glob
     * [glob](https://github.com/isaacs/node-glob) - File globbing utility.
     * 
     * ## grunt.file.minimatch
     * [minimatch](https://github.com/isaacs/minimatch) - File pattern matching utility.
     *
     * ## grunt.file.findup
     * [findup-sync](https://github.com/cowboy/node-findup-sync) - Search upwards for matching file patterns.
     */
    module file{

        // Character encoding /////////////////////////////////////////////////////////

        /**
         * Set this property to change the default encoding used by all grunt.file methods. Defaults to 'utf8'. If you do have to change this value, it's recommended that you change it as early as possible inside your Gruntfile.
         */
        var defaultEncoding: string;

        // Reading and writing /////////////////////////////////////////////////////////

        interface ReadOptions{
            /**
             * If an encoding is not specified, default to grunt.file.defaultEncoding.
             * If specified as null, returns a non-decoded Buffer instead of a string.
             */
            encoding: string;
        }

        /**
         * Read and return a file's contents. Returns a string, unless options.encoding is null in which case it returns a Buffer.
         */
        function read(filepath: string, options?: ReadOptions): string;

        /**
         * Read a file's contents, parsing the data as JSON and returning the result. See grunt.file.read for a list of supported options.
         */
        function readJSON(filepath: string, options?: ReadOptions): any;

        /**
         * Read a file's contents, parsing the data as YAML and returning the result. See grunt.file.read for a list of supported options.
         */
        function readYAML(filepath: string, options?: ReadOptions): any;


        interface WriteOptions{
            /**
             * If an encoding is not specified, default to grunt.file.defaultEncoding.
             * If `contents` is a Buffer, encoding is ignored.
             */
            encoding: string;
        }

        /**
         * Write the specified contents to a file, creating intermediate directories if necessary. Strings will be encoded using the specified character encoding, Buffers will be written to disk as-specified.
         *
         * If the --no-write command-line option is specified, the file won't actually be written.
         */
        function write(filepath: string, contents: string, options?: WriteOptions): void;
        function write(filepath: string, contents: NodeBuffer, options?: WriteOptions): void;

        interface CopyOptions{
            /**
             * If an encoding is not specified, default to grunt.file.defaultEncoding.
             * If null, the `process` function will receive a Buffer instead of String.
             */
            encoding?: string;
            
            /**
             * The source file contents and file path are passed into this function,
             * whose return value will be used as the destination file's contents. If
             * this function returns `false`, the file copy will be aborted.
             */
            process?: (content: string, path: string)=>bool;

            /** 
             * These optional globbing patterns will be matched against the filepath
             * (not the filename) using grunt.file.isMatch. If any specified globbing
             * pattern matches, the file won't be processed via the `process` function.
             *  If `true` is specified, processing will be prevented.
             */
            noProcess?: string;
        }

        /**
         * Copy a source file to a destination path, creating intermediate directories if necessary.
         *
         * If the --no-write command-line option is specified, the file won't actually be written.
         */ 
        function copy(srcpath: string, destpath: string, options?: CopyOptions): void;


        interface DeleteOptions{
            /**
             * Enable deleting outside the current working directory. This option may
             * be overridden by the --force command-line option.
             */
            force: bool;
        }

        /**
         * Delete the specified filepath. Will delete files and folders recursively.
         * 
         * Will not delete the current working directory or files outside the current working directory unless the --force command-line option is specified.
         *
         * If the --no-write command-line option is specified, the filepath won't actually be deleted.
         * If the --no-write command-line option is specified, the file won't actually be written.
         */
        function delete(filepath: string, options?: DeleteOptions): void;



        // Directories ///////////////////////////////////////////////////////////////////////

        /**
         * Works like mkdir -p. Create a directory along with any intermediate directories. If mode isn't specified, it defaults to 0777 & (~process.umask()).
         *
         * If the --no-write command-line option is specified, directories won't actually be created.
         */
        function mkdir(dirpath: string, mode: string): void;


        interface RecurseCallback{
            /**
             * @param abspath The full path to the current file, which is nothing more than the rootdir + subdir + filename arguments, joined.
             * @param rootdir The root director, as originally specified.
             * @param subdir The current file's directory, relative to rootdir.
             * @param filename The filename of the current file, without any directory parts.
             */
            (abspath: string, rootdir: string, subdir: string, filename: string): void;
        }

        /** 
         * Recurse into a directory, executing callback for each file.
         */
        function recurse(rootdir: string, callback: RecurseCallback): void;


        // Globbing patterns ///////////////////////////////////////////////////////////////

        // It is often impractical to specify all source filepaths individually, so grunt supports filename expansion (also know as globbing) via the built-in node-glob library.
        // See the "Globbing patterns" section of the Configuring tasks guide for globbing pattern examples.

        /**
         * The options object supports all minimatch library options, and a few others. For example:
         */
        interface ExpandOptions{
            /**
             * Either a valid fs.Stats method name or a function that is passed the matched src filepath and returns true or false.
             */
            filter?: bool;

            /**
             * Retain src patterns even if they fail to match files. Combined with grunt's --verbose flag, this option can help debug file path issues.
             */
             nonull?: string;

            /**
             * Patterns without slashes will match just the basename part. Eg. this makes *.js work like **&frasl;*.js.
             */
            matchBase?: string;

            /**
             * Patterns will be matched relative to this path, and all returned filepaths will also be relative to this path.
             */
            cwd?: string;
        }

        /**
         * Return a unique array of all file or directory paths that match the given globbing pattern(s). This method accepts either comma separated globbing patterns or an array of globbing patterns. Paths matching patterns that begin with ! will be excluded from the returned array. Patterns are processed in order, so inclusion and exclusion order is significant.
         *
         * File paths are relative to the Gruntfile unless the current working directory is changed with grunt.file.setBase or the --base command-line option.
         */
        function expand(options: ExpandOptions, patterns: string): string[];
        function expand(patterns: string): string[];
        function expand(options: ExpandOptions, patterns: string[]): string[];
        function expand(patterns: string[]): string[]; 


        interface ExpandMappingOptions extends ExpandOptions{
            /**
             * The directory from which patterns are matched. Any string specified as cwd is effectively stripped from the beginning of all matched paths.
             */
            cwd?: string;

            /**
             * Remove the path component from all matched src files. The src file path is still joined to the specified dest.
             */
            flatten?: bool;

            /**
             * Remove anything after (and including) the first "." in the destination path, then append this value.
             */
            ext?: String;

            /**
             * If specified, this function will be responsible for returning the final dest filepath. By default, it joins dest and matchedSrcPath like so:
             */
            rename?(dest: string, matchedSrcPath: string, options: any): string;
        }

        /**
         * Returns an array of src-dest file mapping objects. For each source file matched by a specified pattern, join that file path to the specified dest. This file path may be flattened or renamed, depending on the options specified. See the grunt.file.expand method documentation for an explanation of how the patterns and options arguments may be specified.
         * 
         * Note that while this method may be used to programmatically generate a files array for a multi task, the declarative syntax for doing this described in the "Building the files object dynamically" section of the Configuring tasks guide is preferred.
         */
        function expandMapping(patterns: string, dest: string, options?: ExpandMappingOptions): any[];

        /**
         * Match one or more globbing patterns against one or more file paths. Returns a uniqued array of all file paths that match any of the specified globbing patterns. Both the patterns and filepaths argument can be a single string or array of strings. Paths matching patterns that begin with ! will be excluded from the returned array. Patterns are processed in order, so inclusion and exclusion order is significant.
         * 
         * The options object supports all [minimatch library](https://github.com/isaacs/minimatch) options. For example, if options.matchBase is true, patterns without slashes will match against the basename of the path even if it contains slashes, eg. pattern *.js will match filepath path/to/file.js.
         */
        function match(options:any, patterns: string,   filepaths:string  ): string[];
        function match(options:any, patterns: string[], filepaths:string  ): string[];
        function match(options:any, patterns: string,   filepaths:string[]): string[];
        function match(options:any, patterns: string[], filepaths:string[]): string[];
        function match(patterns: string,   filepaths:string  ): string[];
        function match(patterns: string[], filepaths:string  ): string[];
        function match(patterns: string,   filepaths:string[]): string[];
        function match(patterns: string[], filepaths:string[]): string[];    

        /**
         * This method contains the same signature and logic as the grunt.file.match method, but simply returns true if any files were matched, otherwise false.
         */
        function isMatch(options:any, patterns: string,   filepaths:string  ): bool;
        function isMatch(options:any, patterns: string[], filepaths:string  ): bool;
        function isMatch(options:any, patterns: string,   filepaths:string[]): bool;
        function isMatch(options:any, patterns: string[], filepaths:string[]): bool;
        function isMatch(patterns: string,   filepaths:string  ): bool;
        function isMatch(patterns: string[], filepaths:string  ): bool;
        function isMatch(patterns: string,   filepaths:string[]): bool;
        function isMatch(patterns: string[], filepaths:string[]): bool;   

        // File types ///////////////////////////////////////////////////////////////////////

        /**
         * Does the given path exist? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         * Returns false if the path doesn't exist.
         */
        function exists(path:string, ...paths:string[]): bool;

        /**
         * Is the given path a symbolic link? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         * Returns false if the path doesn't exist.
         */
        function isLink(path:string, ...paths:string[]): bool;

        /**
         * Is the given path a directory? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         * Returns false if the path doesn't exist.
         */
        function isDir(path:string, ...paths:string[]): bool;

        /**
         * Is the given path a file? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         * Returns false if the path doesn't exist.
         */
        function isFile(path:string, ...paths:string[]): bool;

        // Paths ///////////////////////////////////////////////////////////////////////

        /**
         * Is a given file path absolute? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         */
        function isPathAbsolute(path:string, ...paths:string[]): bool;

        /**
         * Do all the specified paths refer to the same path? Returns a boolean.
         */
        function arePathsEquivalent(path:string, ...paths:string[]): bool;

        /**
         * Are all descendant path(s) contained within the specified ancestor path? Returns a boolean.
         * Note: does not check to see if paths actually exist.
         */
        function doesPathContain(ancestorPath: string, ...descendantPaths:string[]): bool;

        /**
         * Is a given file path the CWD? Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         */
        function isPathCwd(path:string, ...paths:string[]): bool;

        /**
         * Is a given file path inside the CWD? Note: CWD is not inside CWD. Returns a boolean.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         */
        function isPathInCwd(path:string, ...paths:string[]): bool;

        /**
         * Change grunt's current working directory (CWD). By default, all file paths are relative to the Gruntfile. This works just like the --base command-line option.
         * Like the Node.js path.join method, this method will join all arguments together and normalize the resulting path.
         */
        function setBase(path:string, ...paths:string[]): void;

    }

    /**
     * Output messages to the console. See the log lib source for more information.
     *
     * # The log API
     * Grunt output should look consistent, and maybe even pretty. As such, there is a plethora of *logging methods, and a few useful patterns. All of the methods that actually log something are chainable.
     * 
     * Note: all methods available under grunt.verbose work exactly like grunt.log methods, but only log if the --verbose command-line option was specified.
     */
    interface LogAPI{
    	/**
    	 * Log the specified msg string, with no trailing newline.
    	 */
    	write(msg: string): LogAPI;

    	/**
    	 * Log the specified msg string, with trailing newline.
    	 */
    	writeln(msg?: string): LogAPI;

    	/**
    	 * (no documented)
    	 */
    	warn(msg?: string): LogAPI;

        /**
         * If msg string is omitted, logs ERROR in red, otherwise logs >> msg, with trailing newline.
         */
    	error(msg?: string): LogAPI;

    	/**
    	 * Log an error with grunt.log.error, wrapping text to 80 columns using grunt.log.wraptext.
    	 */
    	errorlns(msg: string): LogAPI;

    	/**
    	 * If msg string is omitted, logs OK in green, otherwise logs >> msg, with trailing newline.
    	 */
    	ok(msg?: string): LogAPI;

    	/**
    	 * Log an ok message with grunt.log.ok, wrapping text to 80 columns using grunt.log.wraptext.
    	 */
    	oklns(msg: string): LogAPI;

    	/**
    	 * Log the specified msg string in bold, with trailing newline.
    	 */
    	subhead(msg: string): LogAPI;

    	/**
    	 * Log a list of obj properties (good for debugging flags).
    	 */
    	writeflags(obj: any, prefix: string): LogAPI;

    	/**
    	 * Logs a debugging message, but only if the --debug command-line option was specified.
    	 */
    	debug(msg: string): LogAPI;

    	// Utility Methods //////////////////////////////////////////////////////
    	wordlist(arr:any[], options?: WordlistOptions): string[];

    	/**
    	 * Removes all color information from a string, making it suitable for testing .length or perhaps logging to a file.
    	 */
    	uncolor(str: string): string[];

    	/**
    	 * Wrap text string to width characters with \n, ensuring that words are not split in the middle unless absolutely necessary.
    	 */
    	wraptext(width: number, text: string): string[];

    	/**
    	 * Wrap texts array of strings to columns widths characters wide. A wrapper for the grunt.log.wraptext method that can be used to generate output in columns.
    	 */
    	table(widths: number, texts: string[]): string[];
    }

    interface WordlistOptions{
		/**
		 * The separator string (can be colored).
		 */
		separator?: string;

		/**
		 * The array item color (specify false to not colorize).
		 */
		color?: string; 
	}

    interface Log extends LogAPI{
    	verbose: LogAPI;
    	notverbose: LogAPI;
    }

    interface Verbose extends LogAPI{
    	or: LogAPI;
    }

    var log: Log;
    var verbose: Verbose;

    /**
     * The Grunt option API is for sharing parameters across multiple tasks and accessing parameters set on the command line.
     */
    module option{
    	/**
    	 * Gets or sets an option.
    	 * Boolean options can be negated by prepending no- onto the key. For example:
    	 *
    	 *     grunt.option('staging', false);
         *     var isDev = grunt.option('no-staging');
         *     // isDev === true
    	 */
    	function (key: string, val: any): void;
    	function (key: string): any;    	

    	/**
    	 * Initialize grunt.option. If initObject is omitted option will be initialized to an empty object otherwise will be set to initObject.
    	 */
    	function init(initObject?:any): void;

    	/**
    	 * Returns the options as an array of command line parameters.
    	 */
    	function flags(): string[];
    }

    /**
     * Register, run and load external tasks.
     * See the task lib source and task util lib source for more information.
     *
     * # The task API
     * While a task is running, grunt exposes many task-specific utility properties and methods inside the task function via the this object. See the Inside tasks guide for a list of these properties and methods.
     * 
     * Many utility properties and methods are available inside of tasks via the this object.
     * 
     * Note that any method marked with a ☃ (unicode snowman) is also available directly on the grunt object. Just so you know. See the API main page for more usage information.
     */
    module task{
    	// Creating Tasks ////////////////////////////////////////////////////

    	/**
    	 * # Alias task 
    	 * Register an "alias task".
    	 *
    	 * If a task list is specified, the new task will be an alias for one or more other tasks. Whenever this "alias task" is run, every specified task in taskList will be run, in the order specified. The taskList argument must be an array of tasks.
    	 *
    	 * This method is also available as grunt.registerTask.
    	 */
    	function registerTask(taskName: string, taskList: string[]): task;

    	/**
    	 * # Function task
    	 * Register task function.
    	 *
    	 * If a description and taskFunction are passed, the specified function will be executed whenever the task is run. In addition, the specified description will be shown when grunt --help is run. Task-specific properties and methods are available inside the task function as properties of the this object. The task function can return false to indicate that the task has failed.

         * Note that the grunt.task.registerMultiTask method, explained below, can be used to define a special type of task known as a "multi task."
         *
         * This method is also available as grunt.registerTask.
    	 */
    	function registerTask(taskName: string, description: string, taskFunction: (...args:any[])=>void): task;

    	/**
    	 * Register a "multi task." A multi task is a task that implicitly iterates over all of its named sub-properties (AKA targets) if no target was specified. In addition to the default properties and methods, extra multi task-specific properties are available inside the task function as properties of the this object.

         * Many of the contrib tasks, including the jshint task, concat task and uglify task are multi tasks.
         * 
         * This method is also available as grunt.registerMultiTask.
    	 */
    	function registerMultiTask(taskName: string, description: string, taskFunction: (...args:any[])=>void): void;

    	/**
    	 * Rename a task. This might be useful if you want to override the default behavior of a task, while retaining the old name.
         * 
         * Note that if a task has been renamed, the this.name and this.nameArgs properties will change accordingly.
         *
         * This method is also available as grunt.renameTask.
    	 */
    	function renameTask(oldname: string, newname: string): task;

    	// Loading Externally-Defined Tasks  /////////////////////////////////////////////////////////

    	/**
    	 * Load task-related files from the specified directory, relative to the Gruntfile. This method can be used to load task-related files from a local grunt plugin by specifying the path to that plugin's "tasks" subdirectory.
    	 * 
    	 * This method is also available as grunt.loadTasks.
    	 */
    	function loadTasks(tasksPath: string): void;

    	/**
    	 * Load tasks from the specified grunt plugin. This plugin must be installed locally via npm, and must be relative to the Gruntfile. Grunt plugins can be created by using the grunt-init gruntplugin template: grunt init:gruntplugin.
    	 *
    	 * This method is also available as grunt.loadNpmTasks.
    	 */
    	function loadNpmTasks(pluginName: string): void;

    	// Queueing Tasks //////////////////////////////////////////////////////////////////////////////////

    	/**
    	 * Enqueue one or more tasks. Every specified task in taskList will be run immediately after the current task completes, in the order specified. The task list can be an array of tasks or individual task arguments.
    	 */
    	function run(taskList: string[]): void;

    	/**
    	 * Empty the task queue completely. Unless additional tasks are enqueued, no more tasks will be run.
    	 */
    	function clearQueue(): void;

    	/**
    	 * Normalizes a task target configuration object into an array of src-dest file mappings. This method is used internally by the multi task system this.files / grunt.task.current.files property.
    	 */
    	function normalizeMultiTaskFiles(data: any, targetname?: string): void;
    }

    /**
     * Template strings can be processed manually using the provided template functions. In addition, the config.get method (used by many tasks) automatically expands <% %> style template strings specified as config data inside the Gruntfile.
     */
    module templete{
    	/**
    	 * Process a Lo-Dash template string. The template argument will be processed recursively until there are no more templates to process.
 
         * The default data object is the entire config object, but if options.data is set, that object will be used instead. The default template delimiters are <% %> but if options.delimiters is set to a custom delimiter name, those template delimiters will be used instead.
         *
         * Inside templates, the grunt object is exposed so that you can do things like <%= grunt.template.today('yyyy') %>. Note that if the data object already has a grunt property, the grunt API will not be accessible in templates.
    	 */
    	function process(template: string, options?: any): string;

    	/**
    	 * Set the Lo-Dash template delimiters to a predefined set in case you grunt.util._.template needs to be called manually. The config delimiters <% %> are included by default.
    	 *
         * You probably won't need to use this method, because you'll be using grunt.template.process which uses this method internally.
		 */
    	function setDelimiters(name: string): void;

    	/**
    	 * Add a named set of Lo-Dash template delimiters. You probably won't need to use this method, because the built-in delimiters should be sufficient, but you could always add {% %} or [% %] style delimiters.
    	 */
    	function addDelimiters(name: string, opener: string, closer: string): void;

    	// Helpers ///////////////////////////////////////////////////////////////////////////////////////

    	/**
    	 * Format a date using the dateformat library.
    	 *
    	 * In this example, a specific date is formatted as month/day/year.
         * 
         *     grunt.template.date(847602000000, 'yyyy-mm-dd') // '1996-11-10'
    	 */
    	function date(date: any, format: string): string;

    	/**
    	 * Format today's date using the dateformat library.
    	 *
    	 * In this example, today's date is formatted as a 4-digit year.
         * 
         *     grunt.template.today('yyyy') // '2013'
         * 
    	 */
    	function today(format): string;
    }

    /**
     * Miscellaneous utilities, including Lo-Dash, Async and Hooker.
     */
    module util{
    	/**
    	 * Return the "kind" of a value. Like typeof but returns the internal [Class](Class/) value. Possible results are "number", "string", "boolean", "function", "regexp", "array", "date", "error", "null", "undefined" and the catch-all "object".
    	 */
    	function kindOf(value: any): string;

    	/**
    	 * Return a new Error instance (that can be thrown) with the appropriate message. If an Error object is specified instead of message that object will be returned. Also, if an Error object is specified for origError and grunt was run with the --debug 9 option, the original Error stack will be dumped.
    	 */
    	function error(message: string, origError?: Error): Error;

    	/**
    	 * The linefeed character, normalized for the current operating system. (\r\n on Windows, \n otherwise)
    	 */
    	var linefeed: string; 

    	/**
    	 * Given a string, return a new string with all the linefeeds normalized for the current operating system. (\r\n on Windows, \n otherwise)
    	 */
    	function normalizelf(string: string): string;

    	/**
    	 * Recurse through nested objects and arrays, executing callbackFunction for each non-object value. If continueFunction returns false, a given object or value will be skipped.
    	 */
    	function recurse(object: any, callbackFunction: (obj: any)=>void, continueFunction: ()=>bool): void;

    	/**
    	 * Return string str repeated n times.
    	 */
    	function repeat(n: number, str: string): string;

    	/**
    	 * Given str of "a/b", If n is 1, return "a" otherwise "b". You can specify a custom separator if '/' doesn't work for you.
    	 */
    	function pluralize(n: number, str: string, separator: string): void;


    	interface SpawnOptions{
    		/**
    		 * The command to execute. It should be in the system path.
    		 */
    		cmd?: string;

    		/**
    		 * If specified, the same grunt bin that is currently running will be spawned as the child command, instead of the "cmd" option. Defaults to false.
    		 */
    		grunt?: bool;

    		/**
    		 * Additional options for the Node.js child_process spawn method.
    		 */
    		args?: string[];

    		/**
    		 * If this value is set and an error occurs, it will be used as the value and null will be passed as the error value.
    		 */
    		fallback: any;
    	}

    	interface DoneFunction{
    		/**
    		 * @param error If the exit code was non-zero and a fallback wasn't specified, an Error object, otherwise null.
    		 * @param result The result object is an object with the properties .stdout, .stderr, and .code (exit code).
    		 * @param code The numeric exit code.
    		 */
    		(error: any, result: { stdout: any; stderr: any; code: number; }, code: number): void;
    	}

    	/**
    	 * Spawn a child process, keeping track of its stdout, stderr and exit code. The method returns a reference to the spawned child. When the child exits, the done function is called.
    	 */
    	function spawn(options: any, doneFunction: DoneFunction): void;

    	/**
    	 * Given an array or array-like object, return an array. Great for converting arguments objects into arrays.
    	 */
    	function toArray(arrayLikeObject: any): Array;

    	/**
    	 * Normalizes both "returns a value" and "passes result to a callback" functions to always pass a result to the specified callback. If the original function returns a value, that value will now be passed to the callback, which is specified as the last argument, after all other predefined arguments. If the original function passed a value to a callback, it will continue to do so.
    	 */
    	function callbackify(syncOrAsyncFunction: Function): Function;


    	// Internal libraries /////////////////////////////////////////////
        
        /**
          * An internal library for resolving deeply-nested properties in objects.
          */
        var namespace: any;

		/**
		 * An internal library for task running.
		 */        
        var task: any;

		// External libraries //////////////////////////////////////////

		/** 
		 * Lo-Dash - Tons of super-useful array, function and object utility methods. Underscore.string - Tons of string utility methods.
		 *
		 * Note that Underscore.string is mixed into grunt.util._ but is also available as grunt.util._.str for methods that conflict with existing Lo-Dash methods.
		 */
		var _: any;

		/**
		 * Async - Async utilities for node and the browser.
         */
		var async: any;

		/**
		 * JavaScript Hooker - Monkey-patch (hook) functions for debugging and stuff.	
		 */
		var hooker: any;
    }


    /**
     * While a task is running, Grunt exposes many task-specific utility properties and methods inside the task function via the this object. This same object is also exposed as grunt.task.current for use in templates, eg. the property this.name is also available as grunt.task.current.name.
     */
    interface InsideTask{
    	/**
    	 * If a task is asynchronous, this method must be invoked to instruct Grunt to wait. It returns a handle to a "done" function that should be called when the task has completed. Either false or an Error object may be passed to the done function to instruct Grunt that the task has failed.
         * 
         * If the this.async method isn't invoked, the task will execute synchronously.
    	 */
    	async(): (value: any)=>void;

    	/**
    	 * If one task depends on the successful completion of another task (or tasks), this method can be used to force Grunt to abort if the other task didn't run, or if the other task failed. The tasks list can be an array of task names or individual task names, as arguments.
         * 
         * Note that this won't actually run the specified task(s), it will just fail the current task if they haven't already run successfully.
    	 */
    	requires(tasksList: string[]): void;
    	requires(tasksList: string): void;

    	/**
    	 * Fail the current task if one or more required config properties is missing. One or more string or array config properties may be specified.
    	 *
    	 * See the grunt.config documentation for more information about config properties.
         *
         * This method is an alias for the grunt.config.requires method.
    	 */
    	requiresConfig(...prop: string[]): void;

    	/**
    	 * The name of the task, as defined in grunt.registerTask. For example, if a "sample" task was run as grunt sample or grunt sample:foo, inside the task function, this.name would be "sample".
         * 
         * Note that if a task has been renamed with grunt.task.renameTask this property will reflect the new name.
    	 */
    	name: string; 

    	/**
    	 * The name of the task, including any colon-separated arguments or flags specified on the command-line. For example, if a "sample" task was run as grunt sample:foo, inside the task function, this.nameArgs would be "sample:foo".
         * 
         * Note that if a task has been renamed with grunt.task.renameTask this property will reflect the new name.
    	 */
    	nameArgs: string;

    	/**
    	 * An array of arguments passed to the task. For example, if a "sample" task was run as grunt sample:foo:bar, inside the task function, this.args would be ["foo", "bar"].
         *
         * Note that in multi tasks, the current target is omitted from the this.args array.
    	 */
    	args: string[];

    	/**
    	 * An object generated from the arguments passed to the task. For example, if a "sample" task was run as grunt sample:foo:bar, inside the task function, this.flags would be {foo: true, bar: true}.
         *
         * Note that inside multi tasks, the target name is not set as a flag.
         */
    	flags: any;

    	/**
    	 * The number of grunt.log.error calls that occurred during this task. This can be used to fail a task if errors were logged during the task.
    	 */
    	errorCount: number;

    	/**
    	 * Returns an options object. Properties of the optional defaultsObj argument will be overridden by any task-level options object properties, which will be further overridden in multi tasks by any target-level options object properties.
    	 */
    	options(defaultsObj?: any): any;
    }

    interface InsideMultiTasks{
    	/** 
    	 * In a multi task, this property contains the name of the target currently being iterated over. For example, if a "sample" multi task was run as grunt sample:foo with the config data {sample: {foo: "bar"}}, inside the task function, this.target would be "foo".
    	 */
    	target: any;

    	/**
    	 * In a multi task, all files specified using any Grunt-supported file formats and options, globbing patterns or dynamic mappings will automatically be normalized into a single format: the Files Array file format.
		 *
         * What this means is that tasks don't need to contain a ton of boilerplate for explicitly handling custom file formats, globbing patterns, mapping source files to destination files or filtering out files or directories. A task user can just specify files per the Configuring tasks guide, and Grunt will handle all the details.
         * 
         * Your task should iterate over the this.files array, utilizing the src and dest properties of each object in that array. The this.files property will always be an array. The src property will also always be an array, in case your task cares about multiple source files per destination file.
         * 
         * Note that it's possible that nonexistent files might be included in src values, so you may want to explicitly test that source files exist before using them.
         */
    	files: { src: string[]; dest: string; }[];

    	/**
    	 * In a multi task, all src files files specified via any file format are reduced to a single array. If your task is "read only" and doesn't care about destination filepaths, use this array instead of this.files.
    	 */
    	filesSrc: string[];

    	/**
    	 * In a multi task, this is the actual data stored in the grunt config object for the given target. For example, if a "sample" multi task was run as grunt sample:foo with the config data {sample: {foo: "bar"}}, inside the task function, this.data would be "bar".
         *
         * It is recommended that this.options this.files and this.filesSrc are used instead of this.data, as their values are normalized.
    	 */
    	data: any;
    }
}