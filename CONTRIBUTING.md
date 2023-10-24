# How to contribute

## Tools

All tools are listed in `public/tools.json`. To add a tool:

- [Fork the repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- Clone to your local machine or edit on GitHub using either the [Web Editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) or [Codespaces](https://github.com/features/codespaces)
- Create a [feature branch](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for the tool you wish to add
- Open `tools.json` and add the tool to the list(see below for an example)
- Open a pull request 🎉

```json
{
  "id": 4,
  "title": "RealFaviconGenerator",
  "url": "https://realfavicongenerator.net/",
  "description": "With so many platforms and icons, it's hard to know exactly what you should do. What are the dimensions of favicon.ico? How many Touch icons do I need? RealFaviconGenerator did the reseach and testing for you.",
  "logo": "realfavicongenerator.png",
  "alt": "A square that is half blue and half yellow with a capital R in the center",
  "tag": ["realfavicongenerator", "utility", "online", "favicon"]
}
```

> NOTE: All fields except the `alt` property is required. Remember to bump the `id` !important 😄

## Images

You can now also add a logo for the service or tool you are adding. The steps to add a logo are as follows:

1. Create a PNG file with a size of 500px by 300px.
2. Ensure the logo is appropriately sized and centered within the canvas.
3. Add the image file to `public/logos`
4. Add the `logo` and possibly the `alt` properties to the JSON entry. For the `logo` property, only add the file name, for example, `codepen.png`

> NOTE: As the logos are more for visual interest or aesthetic, you generally do not _need_ to add the `alt` property. If you do, keep the description concise and avoid starting the sentence with, "An image of." Screen reader software will already announce the resource as an image.

> NOTE: It is also a good idea to run the image through a tool such as [squoosh.app](https://squoosh.app/)
