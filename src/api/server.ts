let token = '89df6364a8dafd7ec03ad74c304e9223eb66637c1768c967'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-place.glitch.me/api/cars`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
            },
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://car-place.glitch.me/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
		},

        update: async (id:string, data:any = {}) => {
            const response = await fetch(`https://car-place.glitch.me/api/cars/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });
        },

    delete: async(id:string) => {
        const response = await fetch(`https://car-place.glitch.me/api/cars/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}