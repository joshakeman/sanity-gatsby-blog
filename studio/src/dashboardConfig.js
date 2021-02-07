export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60171ab434cec96784e08c01',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tnbjwtvi',
                  apiId: '0a96f577-aaf6-4fb0-9537-8a0beac4bdec'
                },
                {
                  buildHookId: '602058555610f988ca4b1bf9',
                  title: 'New Phase Blog',
                  name: 'pedantic-borg-e76e04',
                  apiId: '81721930-ca50-4e30-9797-70692da03580'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshakeman/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-97n7gd5z.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
