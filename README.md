[![CircleCI](https://circleci.com/gh/alvincrespo/turbo-form/tree/main.svg?style=svg)](https://circleci.com/gh/alvincrespo/turbo-form/tree/main)

# Turbo Form

This library helps port some functionality from [rails-ujs](https://github.com/rails/rails/commit/ad3a47759e67a411f3534309cdd704f12f6930a7) to [Turbo](https://turbo.hotwired.dev/).

If you've ever used [`link_to`](https://guides.rubyonrails.org/working_with_javascript_in_rails.html#link-to) with `remote: true` and are thinking about using Turbo as a replacement to UJS - you'll need to do some [extra work](https://github.com/hotwired/turbo-rails/blob/main/UPGRADING.md). However, Turbo give us everything we need to port over this functionality.

Thus, this library.

With this library, you just need to make some slight changes. For example,

**Before**

```erb
<%= link_to "Delete article", @article, remote: true, method: :delete %>
```

**After**

```erb
<%= link_to "Delete article", @article, data: { controller: "link-method", method: "delete" } %>
```

The idea is to continue moving forward with Turbo with minimal changes to existing app code.

## Installation

```
yarn add @foxglovetech/turbo-form
```

## Usage

### Setup

The first you'll want to do is register the controllers:

```javascript
import {
  ConfirmController,
  LinkMethodController,
} from "@foxglovetech/turbo-form";

const application = Application.start();
application.register("confirm", ConfirmController);
application.register("link-method", LinkMethodController);
```

### `ConfirmController`

If you're looking for a confirmation dialog:

```erb
<%= button_to "Delete This", some_path(resource_name), data: { controller: "confirm", confirm_message: "Are you sure?" }, method: :delete %>
```

### `LinkMethodController`

If you need a link to make a request:

```erb
<%= link_to "Duplicate", some_path(resource_name), data: { controller: "link-method", method: "post" } %>
```

## Development

Checkout the [CONTRIBUTING](./CONTRIBUTING.md) for info on how to help out with contributions/development.

## License

This project is licensed under the [MIT License](./LICENSE)
