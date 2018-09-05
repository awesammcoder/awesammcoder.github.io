# Git-flow Cheatsheet

?> **git-flow** are a set of git extensions to provide high-level repository operations.

## Installation

### OSX
```terminal
# Homebrew
brew install git-flow-avh

# Macport
port install git-flow-avh
```
### Linux
```terminal
apt-get install git-flow
```

### Windows (Cygwin)
```terminal
wget -q -O - --no-check-certificate https://raw.github.com/petervanderdoes/gitflow-avh/develop/contrib/gitflow-installer.sh install stable | bash
```
___
## Getting Started
> Start using git-flow by initializing it inside a git repository.

```terminal
  git flow init
```
___
## Start a new Feature
> Development of new features starting from 'develop' branch.

```terminal
git flow feature start FEATURENAME
```
___
## Finish up a Feature
> Finish the development of a feature. This action performs the following.
* Merges FEATURENAME into **_develop_**
* Removes the feature branch
* Switches back to **_develop_** branch

```terminal
git flow feature finish FEATURENAME
```
___
## Publish a Feature
> Publish a feature to the remote server so it can be used by other users.

``terminal
git flow feature publish FEATURENAME
```

## Getting a Published Feature
```terminal
git flow feature pull origin FEATURENAME
```

> Track a feature using

```terminal
  git flow feature track FEATURENAME
```
___
## Release a Feature
> To start a release, use the git flow release command. It creates a release branch created from the 'develop' branch.

```terminal
git flow release start RELEASE [BASE]
```
?> You can optionally supply a **[BASE]** commit sha-1 hash to start the release from. The commit must be on the **develop** branch.

> It's wise to publish the release branch after creating it to allow release commits by other developers. Do it similar to feature publishing with the command:

```terminal
git flow release publish RELEASE
```

Track a release using

```terminal
  git flow release track RELEASE
```
___

## Finish up a Release
```terminal
git flow release finish RELEASE
```

Finishing a release is one of the big steps in git branching. It performs several actions:

* Merges the release branch back into **master**
* Tags the release with its name
* Back-merges the release into **develop**
* Removes the release branch

!> Don't forget to push your tags
```terminal
git push --tags
```
___

> Credits to [@danielkummer](//danielkummer.github.io/git-flow-cheatsheet/)