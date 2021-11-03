# Contributing

## Bug fixes

Issues can be found on our [GitHub issues](https://github.com/yummygum/vue-flagpack/issues) page. Found a bug? Let us know! Report the bug by [creating a new issue](https://github.com/Yummygum/vue-flagpack/issues/new/choose). Make sure to check the issues page before creating a new bug issue to prevent duplicate issues. Once you start fixing a bug, post your intent on the issue to prevent others diving in at the same time.

## New features

Upcoming new features can be found on our [GitHub issues](https://github.com/yummygum/vue-flagpack/issues) page. Do you want to contribute by adding new features, open a [Feature Request](https://github.com/Yummygum/vue-flagpack/issues/new/choose).

## Documentation

If a PR introduces or changes API, mention one of the Yummygum team members to make sure it'll be processed into the [website docs](https://flagpack.xyz/docs/).


# Development
If you wish to run the package locally, go through the following steps:

1. Fork the `vue-flagpack` repo and clone your fork to your system:
```bash
$: git clone https://github.com/{your-username}/vue-flagpack.git
```
2. Install the package

```bash
$: npm install
```

3. Run npm link to create a local instance of the package
```bash
$: npm link
```

4. Now install the app you're using flagpack in, for this instance we'll be using the [Vue CLI](https://cli.vuejs.org/) to create an project:
```bash
$: vue create my-vue-project
```

5. Use `cd` to move into the app directory and use `npm link` to add your local instance of `react-flagpack`
```bash
# move into directory
$: cd next-app

# add local instance of vue-flagpack
$: npm link vue-flagpack
```

6. Now in the `vue-flagpack` run the dev script so your changes are updated automatically
```bash
$: npm run dev
```

7. You're now ready to go to develop on the `vue-flagpack` package!
## Building the package
Building the package should only ever be needed if there are changes from the `flagpack-core` devDependency. `vue-flagpack`
 will be built based on the `CountryCodeList.json` in `flagpack-core`.

To build `vue-flagpack` go through the following steps:

1. Update `flagpack-core` to the latest version
2. Run the `build` script in `vue-flagpack`
```bash
$: npm run build
```


## Releasing
If you have proper credentials, like a @yummygum team member, you can release a new version of `vue-flagpack`.

To release a new version you'll need to make sure all changes commits are done and pushed. Please follow the [semver](https://semver.org/) guidelines to decide what kind of release type your changes would translate to.

```
$: npm version <release_type>
```
This will update the version number in the `package.json`, and will add a git tag automatically. Next you'll need to push the git tag to the remote.
```
$: git push --tags origin main
```
After that you'll need to publish to npm.
```
$: npm publish
```

When you're confident with the release, make sure the version tag is also released at GitHub.

Follow these steps to get your code PR-ready:

- Make sure your code is linted and formatted nicely according to the style guide
- Create a PR and mention what changes you made
