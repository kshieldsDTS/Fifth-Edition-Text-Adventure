export const Story = [
    {
        id: 1,
        text: 'You struggle to open your eyes as you awaken; your eyelids feel as heavy as stone. You find yourself in the middle of a field.',
        options: [
            {
                text: 'Scan your surroundings.',
                nextID: 2
            }
        ]
    },
    {
        id: 2,
        text: 'You see a river down the hill from you. Looking up the hill, you see a plume of smoke rising from somewhere just beyond your view.',
        options: [
            {
                text: 'Head to the river.',
                nextID: 3,
            },
            {
                text: 'Head to the smoke.',
                nextID: 4,
            }
        ]
    }
]