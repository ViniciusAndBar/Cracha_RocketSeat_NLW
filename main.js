const LinksSocialMedia = {
    github: 'ViniciusAndBar',
    youtube: 'RocketSeat',
    facebook: 'profile.php?id=100004186873604',
    instagram: 'vinizeus2002'
  }

  function changeSocialMedia() {  // É ASSIM QUE FUNCIONA O DOM
    //document.getElementById('userName').   
    //textContent = 'Olivia'//     ou
    //userName.textContent='Marcelo'  Funciona apenas com tags ID
    for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
      
      li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      
    }
  }
  changeSocialMedia() 

  function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
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

  