export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dd06b4cac46daf528605185',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nih9mh8n',
                  apiId: '4bae2b65-6fb9-483a-bb02-123975e6374e'
                },
                {
                  buildHookId: '5dd06b4cb42b5ae3e675018c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gsytbsv7',
                  apiId: '599b1389-45c5-4f0e-93c4-2ce6a37a641d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/crewdisk/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gsytbsv7.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
