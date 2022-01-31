const linksSocialMedia = {
  github: 'Melihodas',
  youtube: 'channel/UC1df87-xy9Ei74MFJ_1k_wA',
  facebook: 'fer.santos.984',
  instagram: '15fersantos',
  twitter: 'shidodemisak'
}
/*
function mudarDeCorOsLinks(){

}*/
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
