import { shallowMount } from "@vue/test-utils";
import MainContent from "@/components/MainContent.vue";
import ContactList from "@/components/ContactList.vue";
import ContactModal from "@/components/ContactModal.vue";
import contactsService from "@/services/contacts.js";

// Contacts service mock
jest.mock("@/services/contacts.js", () => ({
  getData: jest.fn()
}));

describe("MainContent.vue", () => {
  const mockContacts = [
    {
      "id": 1,
      "phoneNumber": ["987654321"],
      "email": ["email1@test.com"],
      "firstname": "firstname1",
      "lastname": "lastname1"
    },
    {
      "id": 2,
      "phoneNumber": ["876543219"],
      "email": ["email2@test.com"],
      "firstname": "firstname2",
      "lastname": "lastname2"
    }
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets the contacts", async () => {
    contactsService.getData.mockResolvedValue(mockContacts);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const contactList = wrapper.findComponent(ContactList);

    expect(contactList.exists()).toBe(true);
    expect(contactList.props("contacts")).toEqual(mockContacts);
  });

  it("shows the error message", async () => {
    contactsService.getData.mockRejectedValue(
      new Error("Error message")
    );
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    expect(wrapper.findComponent(ContactList).exists()).toBe(false);
    expect(wrapper.text()).toContain("Error message");
  });

  it("searches & filters contacts correctly", async () => {
    contactsService.getData.mockResolvedValue(mockContacts);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    wrapper.vm.searchContacts("firstname1");
    await wrapper.vm.$nextTick();
    const filtered = wrapper.vm.filteredContacts;

    expect(filtered).toHaveLength(1);
    expect(filtered[0].firstname).toBe("firstname1");
  });

  it("handles the modal correctly", async () => {
    contactsService.getData.mockResolvedValue(mockContacts);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    // Open modal to edit a contact
    wrapper.vm.handleModal({
      show: true,
      title: "Edit contact",
      data: mockContacts[0]
    });
    await wrapper.vm.$nextTick();
    const modal = wrapper.findComponent(ContactModal);

    expect(modal.exists()).toBe(true);
    expect(modal.props("show")).toBe(true);
    expect(modal.props("title")).toBe("Edit contact");

    // Close modal
    wrapper.vm.handleModal({ show: false });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.modal.show).toBe(false);
  });

  it("adds a new contact", async () => {
    contactsService.getData.mockResolvedValue([...mockContacts]);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const newContact = {
      phoneNumber: ["765432198"],
      email: ["email3@test.com"],
      firstname: "firstname3",
      lastname: "lastname3"
    };
    wrapper.vm.saveContact(newContact);

    expect(wrapper.vm.contacts).toHaveLength(3);
    expect(wrapper.vm.contacts[2].firstname).toBe("firstname3");
  });

  it("updates a contact", async () => {
    contactsService.getData.mockResolvedValue([...mockContacts]);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const updatedContact = {
      id: 1,
      phoneNumber: ["654321987"],
      email: ["email1mod@test.com"],
      firstname: "firstname1mod",
      lastname: "lastname1mod"
    };
    wrapper.vm.saveContact(updatedContact);
    const updated = wrapper.vm.contacts.find((c) => c.id === updatedContact.id);

    expect(updated.firstname).toBe("firstname1mod");
  });

  it("sorts the contacts correctly", async () => {
    contactsService.getData.mockResolvedValue([...mockContacts]);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();

    // Sort desc by firstname field
    wrapper.vm.sortContacts({ field: "firstname", direction: "desc" });

    expect(wrapper.vm.contacts[0].firstname).toBe("firstname1");

    // Sort asc by firstname field
    wrapper.vm.sortContacts({ field: "firstname", direction: "asc" });

    expect(wrapper.vm.contacts[0].firstname).toBe("firstname2");
  });
});
