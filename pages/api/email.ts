// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch'

import type { NextApiHandler } from 'next'

const emailHandler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') return res.status(503).send('Method not supported')

    try {
        const formData = {
            first_name: req.body?.firstName,
            surname: req.body?.lastName,
            email: req.body?.email,
            message: req.body?.message,
        }

        const response = await fetch('https://formspree.io/f/xzbwrvbk', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            return res.status(response.status).json({ ok: false, message: 'Something went wrong' })
        }

        const data = await response.json()

        return res.status(response.status).json({ ok: true, data })
    } catch (error) {
        return res.status(500).json({ ok: false, message: 'Something went wrong' })
    }
}

export default emailHandler
