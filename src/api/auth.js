const registerUrl = "https://upgrade-auth.herokuapp.com/api/auth/register";
export const register = async (userData) => {
    const response = await fetch(registerUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
        body: JSON.stringify(userData),
    });

    const jsonResponse = await response.json();

    // Si hay un error en la respuesta, devolveremos el error del servidor
    // que tenemos en .message
    if(!response.ok){
        throw new Error(jsonResponse.message);
    }

    // Si hay respuesta adedcuada, se devuelve el resultada que habra en .data
    return jsonResponse.data;
}