const linksSocialMedia = {
  github: 'dudobs',
  youtube: 'maykbrito',
  facebook: 'maykbrito',
  instagram: 'dudobs_08',
  twitter: 'dudobs08'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGithub.href = data.html_url
      userProfileImage.src = data.avatar_url
      userLink.textContent = data.login
    })
}

getGithubProfileInfos()
