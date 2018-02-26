import * as actions from './dogs';

describe('actions', () => {
    it('Should be a function', () => {
        expect(typeof actions.dogs).toBe('function');
    })

    it('Should add a dog', () => {
        const dogsList = {"dogs": [
            {
                "id": 1,
                "name": "Kira",
                "breed": "Not defined",
                "category": "Cat",
                "size": "Small",
                "photo": "https://i.imgur.com/nSoaljO.jpg",
                "characteristics": [
                    {
                        "title": "Intelligent"
                    },
                    {
                        "title": "Friendly"
                    }
                ]
            },
        ]}

        const expectedAction = {
            type: 'dogs/SET_DOGS',
            dogsList
        }
        expect(actions.setDogs(dogsList)).toEqual(expectedAction)
    })
})