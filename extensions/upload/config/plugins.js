module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dy9csboff'),
          api_key: env('443223969455388'),
          api_secret: env('xcrTUIE_O3N16KQO4uoj9YQC9Qo'),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });