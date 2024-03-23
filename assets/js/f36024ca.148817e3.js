"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1046],{3905:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"VCC_Templates_Tutorial","metadata":{"permalink":"/yldwebsite/blog/VCC_Templates_Tutorial","source":"@site/blog/VCC Templates Tutorial/\u5982\u4f55\u4f7f\u7528 VCC \u5275\u5efa\u7bc4\u672c.md","title":"\u5982\u4f55\u4f7f\u7528 VCC \u5275\u5efa\u7bc4\u672c","description":"\u6bcf\u6b21\u958b\u65b0\u5c08\u6848\u6642\uff0c\u90fd\u6703\u56fa\u5b9a\u5c0e\u5165\u4e00\u4e9b\u6771\u897f\uff0c\u6bcf\u6b21\u9ede\u9ede\u9ede\u90fd\u89ba\u5f97\u597d\u7169\uff1f","date":"2024-03-21T00:00:00.000Z","formattedDate":"2024\u5e743\u670821\u65e5","tags":[{"label":"VCC","permalink":"/yldwebsite/blog/tags/vcc"}],"readingTime":3.835,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"VCC_Templates_Tutorial","title":"\u5982\u4f55\u4f7f\u7528 VCC \u5275\u5efa\u7bc4\u672c","tags":["VCC"],"date":"2024/03/21"},"unlisted":false,"nextItem":{"title":"Welcome","permalink":"/yldwebsite/blog/welcome"}},"content":"\u6bcf\u6b21\u958b\u65b0\u5c08\u6848\u6642\uff0c\u90fd\u6703\u56fa\u5b9a\u5c0e\u5165\u4e00\u4e9b\u6771\u897f\uff0c\u6bcf\u6b21\u9ede\u9ede\u9ede\u90fd\u89ba\u5f97\u597d\u7169\uff1f  \\n\u900f\u904e VCC \u7684 Templates \u89e3\u6c7a\u4f60\u7684\u56f0\u64fe\uff01  \\n## \u6b65\u9a5f {#Step}\\n## \u627e\u5230 Templates \u8cc7\u6599\u593e\u4f4d\u7f6e {#Find-Templates}\\n\u9996\u5148\uff0c\u6253\u958b VCC > Settings > Files and Folders > \u9ede\u64ca `Templates`  \\n![Templates \u4f4d\u7f6e](./IMG/templates.png)  \\n\u6b64\u6642\u6703\u8df3\u51fa\u4e00\u500b\u8cc7\u6599\u593e\uff0c\u9019\u662f\u62ff\u4f86\u653e\u6211\u5011\u81ea\u5df1\u7684\u7bc4\u672c\u7684  \\n![User Templates \u8cc7\u6599\u593e\u4f4d\u7f6e](./IMG/uesr_templates.png)  \\n## \u8907\u88fd\u5b98\u65b9\u7684\u7bc4\u672c\u5230 Templates \u8cc7\u6599\u593e {#Copy-vrc-template-and-paste-it-to-templates}\\n\u6211\u5011\u518d\u958b\u4e00\u500b\u8cc7\u6599\u593e\uff0c\u8def\u5f91\u8907\u88fd\u4e0a\u9762\u7684\u5c31\u597d\uff0c\u7136\u5f8c\u8fd4\u56de\u4e0a\u4e00\u7d1a\uff0c\u9ede\u64ca `VRCTemlates`\uff0c\u9019\u88e1\u662f VRChat \u5b98\u65b9\u7684\u7bc4\u672c\uff0c\u9078\u500b\u4f60\u8981\u7684\u8907\u88fd\uff0c\u5728\u6211\u5011\u81ea\u5df1\u7684\u7bc4\u672c\u8cc7\u6599\u593e\u8cbc\u4e0a   \\n![VRChat Templates \u8cc7\u6599\u593e\u4f4d\u7f6e](./IMG/vrc_templates.png)  \\n\u9019\u908a\u6211\u9078\u64c7 Avatar \u7bc4\u672c\uff0c\u6539\u4e0b\u540d\u7a31\u907f\u514d\u6df7\u4e82\uff0c\u6bd4\u5982\uff1a`MyAvatarTemplate`\uff0c\u5efa\u8b70\u5168\u82f1\u6587  \\n![\u91cd\u547d\u540d\u793a\u610f\u5716](./IMG/rename.png)  \\n## \u4fee\u6539 package.json {#Edit-package.json}\\n\u6539\u5b8c\u540d\u5f8c\u9ede\u9032\u53bb\uff0c\u6253\u958b `package.json`\uff0c\u7528\u4ec0\u9ebc\u6253\u958b\u90fd\u6c92\u5dee\uff0c\u53ea\u8981\u80fd\u6539\u5167\u5bb9\u5c31\u597d\uff0c\u6211\u662f\u7528\u8a18\u4e8b\u672c  \\n![\u958b\u555f\u65b9\u6cd5\u793a\u610f\u5716](./IMG/edit.png)  \\n\u958b\u555f\u5f8c\u5167\u5bb9\u5982\u4e0b  \\n![\u5b98\u65b9\u539f\u5167\u5bb9](./IMG/original_content.png)  \\n\u6211\u5011\u8981\u6539\u7684\u6709\u4e09\u9ede\\n- `name`\uff1a\u6539\u6210 user.vrchat.template.\u4f60\u7684\u8cc7\u6599\u593e\u540d\u7a31\\n- `displatName`\uff1a\u986f\u793a\u5728 VCC \u88e1\u7684\u540d\u7a31\uff0c\u9019\u88e1\u6211\u53d6\u70ba\u300c\u5e38\u7528 Avatar \u7bc4\u672c-\u6559\u5b78\u7248\u300d\\n- `description`\uff1a\u5c0d\u9019\u500b\u7bc4\u672c\u7684\u63cf\u8ff0\uff0c\u53ef\u4ee5\u628a\u81ea\u5df1\u52a0\u4e86\u751a\u9ebc\u5beb\u4e0b\u4f86\u7576\u5099\u8a3b  \\n\\n:::danger  \\n***\u8acb\u5c0f\u5fc3\u52d9\u5fc5\u4e0d\u8981\u522a\u6389\u524d\u5f8c\u7684\\"\uff0c\u51fa\u4e8b\u4e0d\u8ca0\u8cac***  \\n:::\\n\\n\u6539\u597d\u5f8c\u7684\u6a23\u5b50\uff1a  \\n![\u81ea\u5b9a\u7fa9 package.json \u5167\u5bb9](./IMG/costume_content.png)  \\n\u6539\u5b8c\u5f8c\u8a18\u5f97\u5b58\u6a94\uff08\u5feb\u6377\u9375 `Ctrl S`\uff09\uff0c\u7136\u5f8c\u5c31\u53ef\u4ee5\u95dc\u6389\u9019\u500b\u6a94\u6848\u4e86\u3002\\n## \u78ba\u8a8d package.json \u904b\u4f5c\u6b63\u5e38 {#Check-package.json-work}\\n\u6b64\u6642\u5982\u679c\u6211\u5011\u56de\u5230\u5275\u5efa\u65b0\u5c08\u6848\u7684\u9801\u9762\uff0c\u4f60\u6703\u770b\u5230\u7bc4\u672c\u5df2\u7d93\u51fa\u73fe\u4e86\\n![template \u51fa\u73fe\u4f4d\u7f6e](./IMG/template_apper.png)\\n\u4e0d\u904e\u9019\u6642\u5019\u7684\u7bc4\u672c\u548c\u5b98\u65b9\u9810\u8a2d\u7684\u4e00\u6a21\u4e00\u6a23\uff0c\u6211\u5011\u9084\u9700\u8981\u52a0\u4e0a\u81ea\u5df1\u60f3\u52a0\u7684\u6771\u897f\u3002\\n## \u6dfb\u52a0\u81ea\u5b9a\u7fa9 vpm \u5305 {#Add-custome-vpm-package}\\n\u56de\u5230\u8cc7\u6599\u593e\uff0c\u8fd4\u56de\u4e0a\u4e00\u7d1a\uff0c\u9032\u5165 `Packages` \u8cc7\u6599\u593e\uff0c\u627e\u5230 `vpm-manifest.json`\uff0c\u53f3\u9375\u522a\u9664\\n![\u522a\u9664\u793a\u610f\u5716](./IMG/delete.png)\\n\u7136\u5f8c\u5148\u6253\u958b\u6211\u5011\u96a8\u4fbf\u4e00\u500b\u5df2\u6709\u7684\u5c08\u6848\u8cc7\u6599\u593e\uff0c\u6700\u597d\u662f\u5df2\u7d93\u6709\u5168\u90e8\u5c0e\u5165\u4f60\u60f3\u52a0\u5728\u7bc4\u672c\u88e1\u7684\u6771\u897f\u7684\uff0c\u4e00\u6a23\u627e\u5230`vpm-manifest.json`\u6587\u4ef6\uff0c\u5c07\u9019\u500b\u6587\u4ef6\u8907\u88fd\u8cbc\u4e0a\u5230\u4e0a\u9762\u7684\u4f4d\u7f6e\uff0c\u5b8c\u6210\u5f8c\u6253\u958b\u5b83\\n![vpm-manifest.json \u5167\u5bb9](./IMG/costume_vpm_content.png)\\n\u9019\u908a\u7684\u5167\u5bb9\u6703\u4f9d\u5c0e\u5165\u7684\u5de5\u5177\u800c\u4e0d\u540c\uff0c\u4e0d\u7528\u9a5a\u614c  \\n\u6211\u5011\u8981\u6539\u7684\u662f `version`\\n- \u5982\u679c\u5f8c\u9762\u662f\u5177\u9ad4\u6578\u5b57\uff0c\u90a3\u9810\u8a2d\u5c31\u6703\u662f\u90a3\u500b\u7248\u672c\uff0c\u4e0d\u6703\u6539\u8b8a\\n- \u60f3\u8981\u7dad\u6301\u5728\u7279\u5b9a\u5927\u7248\u672c\u4f46\u53c8\u60f3\u8981\u81ea\u52d5\u66f4\u65b0\u5c0f\u7248\u672c\u7684\u8a71\u5c31\u5728\u7248\u672c\u524d\u9762\u52a0 `~` \uff0c\u5f8c\u9762\u52a0 `x`\uff0c\u5982 `\\"version\\": \\"~3.5.x\\"`\\n- \u5982\u679c\u60f3\u6539\u6210\u81ea\u52d5\u70ba\u6700\u65b0\u7248\uff0c\u5c31\u628a\u6578\u5b57\u63db\u6210 `*` \uff0c\u5982 `\\"version\\": \\"*\\"`\uff0c\u9019\u88e1\u7684\u7248\u672c\u662f\u6307\u6b63\u5f0f\u7248\uff0c\u82e5\u662f\u9700\u8981\u6253\u958b `Show Pre-ReIease Packages` \u624d\u80fd\u770b\u5230\u7684\u7248\u672c\u5247\u4e0d\u5728\u6b64\u7bc4\u570d  \\n\\n:::danger\\n***\u6ce8\u610f\uff1a\u7576\u4f60\u770b\u5230 `locked` \u9019\u500b\u8a5e\u51fa\u73fe\uff0c\u5c31\u4e0d\u8981\u6539\u5b83\u4e0b\u9762\u7684\u90e8\u5206\u4e86***\\n![lock \u793a\u610f\u5716](./IMG/lock.png)\\n:::\\n\\n\u6539\u5b8c\u5f8c\u4e00\u6a23\u8a18\u5f97\u5132\u5b58\uff0c\u7136\u5f8c\u5c31\u5b8c\u6210\u5566\uff5e\u958b\u4e00\u500b\u65b0\u5c08\u6848\u6e2c\u8a66\u5427"},{"id":"welcome","metadata":{"permalink":"/yldwebsite/blog/welcome","source":"@site/blog/2021-08-26-welcome/index.md","title":"Welcome","description":"Docusaurus blogging features are powered by the blog plugin.","date":"2021-08-26T00:00:00.000Z","formattedDate":"2021\u5e748\u670826\u65e5","tags":[{"label":"facebook","permalink":"/yldwebsite/blog/tags/facebook"},{"label":"hello","permalink":"/yldwebsite/blog/tags/hello"},{"label":"docusaurus","permalink":"/yldwebsite/blog/tags/docusaurus"}],"readingTime":0.405,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"},{"name":"Yangshun Tay","title":"Front End Engineer @ Facebook","url":"https://github.com/yangshun","imageURL":"https://github.com/yangshun.png","key":"yangshun"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["slorber","yangshun"],"tags":["facebook","hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"\u5982\u4f55\u4f7f\u7528 VCC \u5275\u5efa\u7bc4\u672c","permalink":"/yldwebsite/blog/VCC_Templates_Tutorial"},"nextItem":{"title":"MDX Blog Post","permalink":"/yldwebsite/blog/mdx-blog-post"}},"content":"[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).\\n\\nSimply add Markdown files (or folders) to the `blog` directory.\\n\\nRegular blog authors can be added to `authors.yml`.\\n\\nThe blog post date can be extracted from filenames, such as:\\n\\n- `2019-05-30-welcome.md`\\n- `2019-05-30-welcome/index.md`\\n\\nA blog post folder can be convenient to co-locate blog post images:\\n\\n![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)\\n\\nThe blog supports tags as well!\\n\\n**And if you don\'t want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config."},{"id":"mdx-blog-post","metadata":{"permalink":"/yldwebsite/blog/mdx-blog-post","source":"@site/blog/2021-08-01-mdx-blog-post.mdx","title":"MDX Blog Post","description":"Blog posts support Docusaurus Markdown features, such as MDX.","date":"2021-08-01T00:00:00.000Z","formattedDate":"2021\u5e748\u67081\u65e5","tags":[{"label":"docusaurus","permalink":"/yldwebsite/blog/tags/docusaurus"}],"readingTime":0.175,"hasTruncateMarker":false,"authors":[{"name":"S\xe9bastien Lorber","title":"Docusaurus maintainer","url":"https://sebastienlorber.com","imageURL":"https://github.com/slorber.png","key":"slorber"}],"frontMatter":{"slug":"mdx-blog-post","title":"MDX Blog Post","authors":["slorber"],"tags":["docusaurus"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/yldwebsite/blog/welcome"},"nextItem":{"title":"Long Blog Post","permalink":"/yldwebsite/blog/long-blog-post"}},"content":"Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).\\n\\n:::tip\\n\\nUse the power of React to create interactive blog posts.\\n\\n```js\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n```\\n\\n<button onClick={() => alert(\'button clicked!\')}>Click me!</button>\\n\\n:::"},{"id":"long-blog-post","metadata":{"permalink":"/yldwebsite/blog/long-blog-post","source":"@site/blog/2019-05-29-long-blog-post.md","title":"Long Blog Post","description":"This is the summary of a very long blog post,","date":"2019-05-29T00:00:00.000Z","formattedDate":"2019\u5e745\u670829\u65e5","tags":[{"label":"hello","permalink":"/yldwebsite/blog/tags/hello"},{"label":"docusaurus","permalink":"/yldwebsite/blog/tags/docusaurus"}],"readingTime":2.05,"hasTruncateMarker":true,"authors":[{"name":"Endilie Yacop Sucipto","title":"Maintainer of Docusaurus","url":"https://github.com/endiliey","imageURL":"https://github.com/endiliey.png","key":"endi"}],"frontMatter":{"slug":"long-blog-post","title":"Long Blog Post","authors":"endi","tags":["hello","docusaurus"]},"unlisted":false,"prevItem":{"title":"MDX Blog Post","permalink":"/yldwebsite/blog/mdx-blog-post"},"nextItem":{"title":"First Blog Post","permalink":"/yldwebsite/blog/first-blog-post"}},"content":"This is the summary of a very long blog post,\\n\\nUse a `\x3c!--` `truncate` `--\x3e` comment to limit blog post size in the list view.\\n\\n\x3c!--truncate--\x3e\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"},{"id":"first-blog-post","metadata":{"permalink":"/yldwebsite/blog/first-blog-post","source":"@site/blog/2019-05-28-first-blog-post.md","title":"First Blog Post","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet","date":"2019-05-28T00:00:00.000Z","formattedDate":"2019\u5e745\u670828\u65e5","tags":[{"label":"hola","permalink":"/yldwebsite/blog/tags/hola"},{"label":"docusaurus","permalink":"/yldwebsite/blog/tags/docusaurus"}],"readingTime":0.12,"hasTruncateMarker":false,"authors":[{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":{"name":"Gao Wei","title":"Docusaurus Core Team","url":"https://github.com/wgao19","image_url":"https://github.com/wgao19.png","imageURL":"https://github.com/wgao19.png"},"tags":["hola","docusaurus"]},"unlisted":false,"prevItem":{"title":"Long Blog Post","permalink":"/yldwebsite/blog/long-blog-post"}},"content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet"}]}')}}]);