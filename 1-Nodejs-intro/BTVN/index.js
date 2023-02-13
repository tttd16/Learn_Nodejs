const btnSeacrch = document.getElementById("btn");
const nameGit = document.getElementById("name-git");
const avatarGit = document.getElementById("avatar-git");
const emailGit = document.getElementById("email-git");
const companyGit = document.getElementById("company-git");
const followerGit = document.getElementById("follower-git");

const getGitInfo = async (name) => {
  const url = `https://api.github.com/users/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Không tìm thấy user bạn yêu cầu");
  } else {
    const data = await response.json();
    console.log(data);
    return data;
  }
};

const showGitInfo = async () => {
  const input = document.getElementById("input-git");
  const name = input.value;
  try {
    const userInfo = await getGitInfo(name);
    nameGit.innerHTML = userInfo.login;
    avatarGit.src = userInfo.avatar_url;
    companyGit.innerHTML = userInfo.company;
    emailGit.innerHTML = userInfo.email;
    followerGit.innerHTML = userInfo.followers;
  } catch (error) {
    alert(error.message);
  }
};

btnSeacrch.addEventListener("click", showGitInfo);
