# :fish_cake: ajax-load v1.0.1

## Description

A simple and lightweight Javascript function to load your ajax content using HTML data-* attribute.

## Dependencies

* Coffee and love.

## Quick start

1. Copy ajax-load.min.js (located at /dist folder) into your project
2. Then, before your closing `<body>` tag add:
`<script type="text/javascript" src="/your/path/to/fle/ajax-load.min.js"></script>`
3. Enjoy!

## Features

* Load ajax content via data-* HTML attribute
* Load ajax content via javascript function
* Trigger action on click
* Trigger action on load page
* Destroy previously loaded content
* Callbacks

## Usage

Ajax Load
`<a href="#content-link-goes-here" data-ajax-load="#container-id-goes-here" data-ajax-callback="yourCallbackFunction()">Load content</a>`

Ajax Destroy
`<button type="button" data-ajax-destroy="#item-id-goes-here" data-ajax-callback="yourCallbackFunction()">Destroy item</button>`

## Todo

- Use it as plugin
- Improve documentation
