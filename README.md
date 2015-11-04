# :fish_cake: ajax-load v1.0.0

## Description

A simple and lightweight Javascript function to load your ajax content using HTML data-* attribute.

## Dependencies

* Jquery (Temporarily)

## Quick start

1. Copy ajax-load.js into your project
2. Then, before your closing `<body>` tag add:
`<script type="text/javascript" src="/your/path/to/fle/ajax-load.js"></script>`
3. Enjoy!

## Features

* Load ajax content via data-* HTML attribute
* Load ajax content via javascript function
* Trigger action on click
* Trigger action on load page
* Destroy previously loaded content
* Smooth transitions
* Callbacks

## Usage

Ajax Load
`<a href="#content-link-goes-here" data-ajax-load="#container-id-goes-here" data-ajax-transition="fade/slide/empty" data-ajax-callback="yourCallbackFunction()">Load content</a>`

Ajax Destroy
`<button type="button" data-ajax-destroy="#item-id-goes-here" data-ajax-transition="fade/slide/empty" data-ajax-callback="yourCallbackFunction()">Destroy item</button>`

## Todo

- Rebuild in pure Javascript
- Use it as plugin
- Improve documentation
