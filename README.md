

This is a simple demo to show that the decent quality BuckleScript std lib achieves even as a transpiler.

Comparison is always subjective, please draw the conculsion by yourself.

# Build
```
npm run build
```

# Comparison

## Original source:

[BuckleScript code using stdlib](src/demo.ml)
[JS code using immutablejs](src/jsdemo.js) 

## Output size

```
npm run bundle
```

```
> bench@0.1.0 bundle /Users/hongbozhang/git/bench
> rollup -c && java -jar node_modules/google-closure-compiler/compiler.jar --compilation_level SIMPLE  --language_out=ES5 src/bundle.js --js_output_file src/bundle.closure.js && gzip -9 -k src/bundle.closure.js && webpack -p src/jsdemo.js src/jsdemo.pack.js && gzip -9 -k src/jsdemo.pack.js && ls -al src/*.gz

-rw-r--r--  1 hongbozhang  staff    576 Feb 11 15:25 src/bundle.closure.js.gz
-rw-r--r--  1 hongbozhang  staff  15856 Feb 11 15:25 src/jsdemo.pack.js.gz
```

Note the bucklescript shaked output is 576 bytes gzipped, while webpack production build for immutablejs is 15_856 bytes, 
please let me know if you have better way to bundle such JS code.

## Performance

```
npm run bench
```

```

> bench@0.1.0 bench /Users/hongbozhang/git/bench
> node src/bundle.closure.js && node src/jsdemo.pack.js

buckle: 548.426ms
jsdemo: 2520.164ms
```

