interface UserCookiesData {
  firstName: string;
  lastName: string;
}

export async function generateRandomName(data: UserCookiesData) {
  
  const generateRandomName = async (cookiesData: UserCookiesData) =>{
    const randomNumber = Math.floor(Math.random() * 100); 
    return `${cookiesData.firstName.toLowerCase}.${cookiesData.lastName.toLowerCase}${randomNumber}`
  }
  
  const randomName = await generateRandomName(data);
  return randomName
}