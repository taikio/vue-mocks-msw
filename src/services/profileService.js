export const profileService = {
	async fetchProfile(id) {
		try {
			const result = await fetch(`http://minhaapi.com/user/profile/${id}`)
			const data = await result.json()
			return Promise.resolve(data)
		} catch(error) {
			console.log('request error', error)
			return Promise.reject(error)
		}
	}
}
