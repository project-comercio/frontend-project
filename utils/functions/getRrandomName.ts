interface UserCookiesData {
  firstName: string;
  lastName: string;
}

export async function generateRandomName(data: UserCookiesData) {
  
  const generateRandomName = async (cookiesData: UserCookiesData) =>{
    const randomNumber = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    return `${cookiesData.firstName}${randomNumber}${cookiesData.lastName}`;
  }
  
  const randomName = await generateRandomName(data);
  return randomName
}