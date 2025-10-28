import { shallowMount } from "@vue/test-utils";
import MainContent from "@/components/MainContent.vue";
import ContactList from "@/components/ContactList.vue";
import contactsService from "@/services/contacts.js";

// Contacts service mock
jest.mock("@/services/contacts.js", () => ({
  getData: jest.fn()
}));

describe("MainContent.vue", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("gets the contacts", async () => {
    const mockData = [
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
    contactsService.getData.mockResolvedValue(mockData);
    const wrapper = shallowMount(MainContent);
    await wrapper.vm.$nextTick();
    await wrapper.vm.$nextTick();
    const contactList = wrapper.findComponent(ContactList);

    expect(contactList.exists()).toBe(true);
    expect(contactList.props("contacts")).toEqual(mockData);
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
});
