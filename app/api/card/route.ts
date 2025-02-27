import { NextResponse } from 'next/server'

function getUniqueRandomNumbers(min: number, max: number): number[] {
  const uniqueNumbers = new Set<number>()
  while (uniqueNumbers.size < 10) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    uniqueNumbers.add(randomNumber)
  }
  return Array.from(uniqueNumbers)
}

export async function GET() {
  const card = [
    {
      balance: 5765,
      name: 'Eddy Cusma',
      validity: '12/01',
      number: '3778 **** *** 1234',
      type: 'paypal',
    },
    {
      balance: 2342,
      name: 'Saren Wanderwoodson',
      validity: '07/26',
      number: '0922 **** **** 1483',
      type: 'debit',
    },
    {
      balance: 9876,
      name: 'Lila Hartmann',
      validity: '03/25',
      number: '5412 **** **** 7890',
      type: 'debit',
    },
    {
      balance: 4567,
      name: 'Marcus Rodriguez',
      validity: '11/24',
      number: '4561 **** *** 2345',
      type: 'paypal',
    },
    {
      balance: 6543,
      name: 'Elena Petrova',
      validity: '09/27',
      number: '1234 **** **** 5678',
      type: 'debit',
    },
    {
      balance: 3210,
      name: 'Jack Thompson',
      validity: '06/23',
      number: '6789 **** *** 9012',
      type: 'paypal',
    },
    {
      balance: 8765,
      name: 'Sophia Chen',
      validity: '04/26',
      number: '2345 **** **** 6789',
      type: 'debit',
    },
    {
      balance: 2109,
      name: "Aiden O'Connor",
      validity: '10/22',
      number: '7890 **** *** 3456',
      type: 'paypal',
    },
    {
      balance: 5432,
      name: 'Isabella Martinez',
      validity: '05/25',
      number: '8901 **** **** 4567',
      type: 'debit',
    },
    {
      balance: 7654,
      name: 'Noah Williams',
      validity: '01/24',
      number: '9012 **** *** 7890',
      type: 'paypal',
    },
    {
      balance: 3456,
      name: 'Emma Johnson',
      validity: '08/26',
      number: '4567 **** **** 2345',
      type: 'debit',
    },
    {
      balance: 6789,
      name: 'Liam Anderson',
      validity: '02/23',
      number: '5678 **** *** 9012',
      type: 'paypal',
    },
    {
      balance: 9012,
      name: 'Olivia Smith',
      validity: '12/25',
      number: '6789 **** **** 3456',
      type: 'debit',
    },
    {
      balance: 2345,
      name: 'Ethan Brown',
      validity: '07/22',
      number: '7890 **** *** 5678',
      type: 'paypal',
    },
    {
      balance: 7890,
      name: 'Ava Davis',
      validity: '03/24',
      number: '8901 **** **** 1234',
      type: 'debit',
    },
    {
      balance: 4321,
      name: 'Mason Taylor',
      validity: '11/23',
      number: '9012 **** *** 6789',
      type: 'paypal',
    },
    {
      balance: 6543,
      name: 'Harper Wilson',
      validity: '06/25',
      number: '1234 **** **** 7890',
      type: 'debit',
    },
    {
      balance: 3210,
      name: 'Logan Moore',
      validity: '09/22',
      number: '2345 **** *** 2345',
      type: 'paypal',
    },
    {
      balance: 8765,
      name: 'Charlotte Lee',
      validity: '04/26',
      number: '3456 **** **** 9012',
      type: 'debit',
    },
    {
      balance: 5678,
      name: 'Lucas Garcia',
      validity: '10/24',
      number: '4567 **** *** 3456',
      type: 'paypal',
    },
    {
      balance: 2109,
      name: 'Amelia Martinez',
      validity: '05/23',
      number: '5678 **** **** 5678',
      type: 'debit',
    },
    {
      balance: 9876,
      name: 'Benjamin Robinson',
      validity: '01/25',
      number: '6789 **** *** 7890',
      type: 'paypal',
    },
    {
      balance: 4567,
      name: 'Mia Clark',
      validity: '08/22',
      number: '7890 **** **** 1234',
      type: 'debit',
    },
    {
      balance: 7123,
      name: 'William Rodriguez',
      validity: '02/24',
      number: '8901 **** *** 6789',
      type: 'paypal',
    },
    {
      balance: 5432,
      name: 'Sofia Thompson',
      validity: '12/23',
      number: '9012 **** **** 3456',
      type: 'debit',
    },
    {
      balance: 3698,
      name: 'James White',
      validity: '07/25',
      number: '1234 **** *** 5678',
      type: 'paypal',
    },
    {
      balance: 6789,
      name: 'Evelyn Harris',
      validity: '03/22',
      number: '2345 **** **** 9012',
      type: 'debit',
    },
    {
      balance: 4321,
      name: 'Daniel Martin',
      validity: '11/24',
      number: '3456 **** *** 2345',
      type: 'paypal',
    },
    {
      balance: 8765,
      name: 'Abigail Lewis',
      validity: '06/26',
      number: '4567 **** **** 7890',
      type: 'debit',
    },
    {
      balance: 2345,
      name: 'Alexander Walker',
      validity: '09/23',
      number: '5678 **** *** 1234',
      type: 'paypal',
    },
  ]

  const indexes = getUniqueRandomNumbers(0, card.length - 1)

  const response = indexes.map((idx) => card[idx])

  return NextResponse.json(response)
}
