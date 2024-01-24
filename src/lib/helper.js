import * as JOSE from 'jose';

export function getJwtSecretKey() {
	const secret = process.env.JWT_SECRET;
	if (!secret) {
		throw new Error('JWT Secret key is not set');
	}
	const enc = new TextEncoder().encode(secret);
	return enc;
}

export const getDataFromToken = async (request) => {
    try {
        const token = request.cookies.get("token")?.value || '';
        if (!token) {
            return null;
        }
        const { payload } = await JOSE.jwtVerify(token, getJwtSecretKey());
        return payload.id;
    } catch (error) {
        throw new Error(error.message);
    }

}

export const getJWTToken = async (tokenData) =>{

    const token = await new JOSE.SignJWT(tokenData)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`1d`)
    .sign(getJwtSecretKey());
    return token;
}