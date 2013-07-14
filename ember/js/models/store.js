Contacts.Store = DS.Store.extend({
    revision: 12,
    adapter: 'Contacts.LSAdapter'
});

Contacts.LSAdapter = DS.LSAdapter.extend({
    namespace: 'contacts-emberjs'
});
