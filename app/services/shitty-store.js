import Service from '@ember/service';

export default Service.extend({
  init() {
    this._super(...arguments);

    this.set('bucket', {});
  },

  addItem({ type, id, attributes }) {
    if (typeof this.bucket[type] === 'undefined') {
      this.bucket[type] = {};
    }

    let typeBucket = this.bucket[type];
    let record = { id, ...attributes };

    typeBucket[id] = record;

    return record;
  },

  listItems(type) {
    let typeBucket = this.bucket[type];

    if (typeBucket) {
      return Object.entries(typeBucket).map(([_, record]) => record);
    } else {
      return [];
    }
  },

  getItem(type, id) {
    return this.bucket[type][id];
  },
});
