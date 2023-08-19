
# Engineering Management Handbook

An open-source book on leadership in software engineering. This repository not only houses the content but also the scripts and automation tools to generate various formats of the book (website, epub, physical book format, etc.).

| <img width="578" alt="Square Mockup" src="https://github.com/bartaxyz/engineering-management-handbook/assets/4202010/a1e7d18c-9c20-4d62-a347-4c66a71f3810"> |
| --- |

## Structure
`/book`: Primary content of the book organized by sections or chapters.
`/scripts`: Scripts used for tasks such as converting the book to different formats or linting.
`/assets`: Global assets such as images, stylesheets, or other media referenced in the book.
`/.github/workflows`: GitHub Action workflows for CI/CD purposes.
`/dist`: Contains the built versions of the book in various formats.

## Contribution Guidelines
We welcome contributions! Whether you're fixing typos, suggesting improvements, or adding new content, your efforts are appreciated. Before contributing, please review our `STYLE_GUIDE.md` to ensure consistency and clarity across the book.

1. **Fork the Repository**: Start by forking this repository to your account.
2. **Clone Your Fork**: Clone your fork to your local machine.
3. **Create a New Branch**: For every change, especially new contributions, create a new branch.
4. **Make Changes**: Add your content or make modifications.
5. **Push and Create a Pull Request**: Push your changes to your fork and then create a pull request. Please provide a clear description of your changes in the PR.

## Building the Book
If you wish to build the book locally:

1. Install [pandoc](https://pandoc.org/installing.html)
2. Navigate to the root directory.
3. Run the build script:
  ```bash
  ./scripts/build.sh
  ```
4. Check the `/dist` directory for the generated formats.

## License
The license for this project is not yet determined. Please refer to the [license github issue](https://github.com/bartaxyz/engineering-leadership/issues/1) for more information.
