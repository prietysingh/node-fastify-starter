const patientProperties = {
  id: { type: 'number' },
  fullName: { type: 'string' },
  accountNo: { type: 'string', nullable: true },
  ssn: { type: 'string' },
  dob: { type: 'string' },
  clientName: { type: 'string' },
  subscriberId: { type: 'string'},
  createdAt: { type: 'string' },
  updatedAt: { type: 'string' }
}

const tags = ['Patient']

const getPatients = {
  tags,
  params: {
    type: 'object',
    properties: {
      tenantId: {
        type: 'number',
        description: 'tenant id'
      }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: patientProperties
      }
    }
  },
  security: [
    {
      JWT: {
        type: 'apiKey',
        in: 'header',
        name: 'Authorization',
        description: ''
      }
    }
  ]
}


module.exports = {
  getPatients
}
