import axios from 'axios';

const server = "http://localhost:4006"

const resolvers = {
  Query: {
      pluginSetting: async (root, args, context, info) => {
        const pluginSetting = (await axios.get(`${server}/pluginSettings/${args.id}`)).data;
        return pluginSetting;
      }
  },
  Mutation: {
    updatePluginSetting: async (root, args, context, info) => {
      const pluginSetting = (await axios.get(`${server}/pluginSettings/${args.id}`)).data;
      pluginSetting['setting'] = args.setting;
      return (await axios.put(`${server}/pluginSettings/${args.id}`, pluginSetting, { headers: {"Content-Type": "application/json"}})).data;
    }
  }
};

export {resolvers};
