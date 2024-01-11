interface IDatasourceConfig {
  options: {
    dropSchema: boolean
  }
}

export default {
  options: {
    dropSchema: process.env.CLEAN_DATASOURCE ?? false,
  },
} as IDatasourceConfig
