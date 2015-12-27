# Marko + Hapi Demo

This is a sample project using [Hapi][] and [Marko][] to stream templates to a browser as data become available. [Highland][] is used to glue some pieces together.

[Hapi]: http://hapijs.com
[Marko]: http://markojs.com
[Highland]: http://highlandjs.org

It only has one route at `/`. The output is six greetings, each a second apart. [Depending on your browser][chunks], you will either start seeing data right away or have to wait. Currently using Chrome is the easiest way to see this in action.

[chunks]: http://stackoverflow.com/a/16909228

## Usage

```
npm install
npm start
```

Visit [localhost:3000](http://localhost:3000/).
