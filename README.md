#Simple Machine Learning Algorithms written in Javascript#
As a way to reinforce what I'm learning, I decided to implement simple machine learning
algorithms in Javascript.  It's a work in progress, but currently contains
a working implementations of:
1. Linear Regression

In progress
** Logistic Regression

#Notes#
These algorithms are dependent on [node-sylvester](https://github.com/NaturalNode/node-sylvester)
However, the node-sylvester package on NPM doesn't seem to be entirely up to date with
the git repo, and is missing a few key functions that exist in the repo
including ways to find the mean and std of matrix columns, as well as a way to
load a text file directly into a Sylvester matrix. To avoid duplication,
I haven't uploaded the node-sylvester package here, so to use these algorithms
the package must be downloaded directly from it's repo page (```npm install``` gets
an older version). Just include the package's index file and any needed modules
in any files that need Sylvester.
