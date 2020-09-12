/* eslint quotes: 0, quote-props: 0 */

const configSchema = {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $id: 'http://example.com/config.schema.json',
  title: 'Config',
  type: 'object',
  properties: {
    baking_address: {
      type: 'string',
    },
    payment_address: {
      type: 'string',
    },
    service_fee: {
      type: 'number',
      maximum: 100,
      minimum: 0,
    },
    min_delegation_amt: {
      type: 'number',
    },
    delegator_pays_xfer_fee: {
      type: 'boolean',
    },
    delegator_pays_ra_fee: {
      type: 'boolean',
    },
    reactivate_zeroed: {
      type: 'boolean',
    },
    rules_map: {
      type: 'object',
      properties: {
        mindelegation: {
          type: 'string',
        },
      }
    },
    supporters_set: {
      type: 'object',
      patternProperties: {
        '^tz.*$': { type: 'null' },
        '^KT.*$': { type: 'null' }
      }
    },
    specials_map: {
      type: 'object',
      patternProperties: {
        '^tz.*$': {
          type: 'number',
          maximum: 100,
          minimum: 0,
        },
        '^KT.*$': {
          type: 'number',
          maximum: 100,
          minimum: 0,
        }
      }
    },
    founders_map: {
      type: 'object',
      patternProperties: {
        '^tz.*$': {
          type: 'number',
          maximum: 1,
          minimum: 0,
        },
        '^KT.*$': {
          type: 'number',
          maximum: 1,
          minimum: 0,
        }
      }
    },
    owners_map: {
      type: 'object',
      patternProperties: {
        '^tz.*$': {
          type: 'number',
          maximum: 1,
          minimum: 0,
        },
        '^KT.*$': {
          type: 'number',
          maximum: 1,
          minimum: 0,
        }
      }
    }
  },
  required: [
    'baking_address',
    'payment_address',
    'service_fee',
    'min_delegation_amt',
    'delegator_pays_xfer_fee',
    'delegator_pays_ra_fee',
    'reactivate_zeroed',
    'rules_map',
    'supporters_set',
    'specials_map',
    'founders_map',
    'owners_map',
  ],
}

module.exports = configSchema
