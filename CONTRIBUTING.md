# Contributing

The first thing you'll want to do is clone the repo:

```
git clone https://github.com/alvincrespo/turbo-form.git
```

Once you've got this sucker downloaded, you'll need to install dependencies:

```
yarn
```

In order to test this against a project - you'll need to link it:

```
cd turbo-form && yarn link
```

Finally, in your project you'll do:

```
cd my-project && yarn link @foxglovetech/turbo-form
```

When you're done testing your changes, just unlink the project:

```
cd turbo-form && yarn unlink
```
