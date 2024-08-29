In the context of the Python ecosystem has several tools to address the common steps of the CI setups. The first steps in the CI setup or process revolve around linting, testing and building.

Regarding the linting of Python codebases the most common tools are Pylint, Flake8 and Black. These tools revolve around analyzing the code in look for errors, format the code to enforce a coding standard, check the quality of the code and common code smells and ultimately ensure that the code adheres to a consistent style.

Testing is usually done with tools such as pytest, unittest and tox. The common uses across all these tools involve parameterized testing. Unittest is built-in with Python, so starting with it makes sense and will probably be the easiest way to start with tests. It's worth noting that tox will allow testing in multiple environments, so you'll be able to make sure that your code works across Python versions.

Finally, to complete the build step we have setuptools, wheel and twine. The main issue of these is the possibility of easy building and publishing of Python packages.

To setup these CI steps you could use Travis CI or CircleCI, besides the already known GitHub Actions. Travis CI will integrate with GitHub, making it a solution close to GItHub Actions in ease of use. CircleCI excels while working with Docket or Kubernetes.

The choice between self-hosted or a cloud-based environment for the projects depends on a variety of factors. You'll need to consider things such as team size, budget, scalability, security requirements and integration needs.
