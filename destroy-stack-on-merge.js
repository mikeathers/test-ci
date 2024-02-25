async function main() {
  if (!process.env.BRANCH_NAME) throw Error('A BRANCH_NAME must be provided...')
  if (!process.env.DOMAIN_NAME) throw Error('A DOMAIN_NAME must be provided...')
  if (!process.env.SUBDOMAIN_NAME) throw Error('A SUBDOMAIN_NAME must be provided...')
  if (!process.env.STACK_URL) throw Error('A STACK_URL must be provided...')
  if (!process.env.STACK_NAME) throw Error('A STACK_NAME must be provided...')
  if (!process.env.GITHUB_REPOSITORY)
    throw Error('A GITHUB_REPOSITORY must be provided...')

  console.log({
    branch: process.env.BRANCH_NAME,
    domainName: process.env.DOMAIN_NAME,
    subDomain: process.env.SUBDOMAIN_NAME,
    githubRepo: process.env.GITHUB_REPOSITORY,
    stackUrl: process.env.STACK_URL,
    stackName: process.env.STACK_NAME,
  })
}

main()
