import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { MenuIcon, XIcon, TrashIcon, PlusIcon } from "@heroicons/react/outline";

const DesktopSidebar = ({
  conversations,
  onDeleteConversation,
  onSelectConversation,
  onAddNewConversation,
}) => {
  return (
    <div className="lg:flex flex-col flex-shrink-0 lg:w-1/4 bg-gray-200 p-4">
      <Disclosure>
        <Disclosure.Button className="flex flex-row bg-blue p-4 rounded-lg items-center justify-between w-full mb-4">
          <div className="font-bold text-white">Conversations</div>
          <div className="flex flex-row items-center space-x-4">
            <div className="text-white block " onClick={onAddNewConversation}>
              <PlusIcon className="h-6 w-6" />
            </div>
            <div className="text-white block lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </div>
          </div>
        </Disclosure.Button>
        <div className="hidden lg:flex  flex-col items-center">
          <ul>
            {conversations.map((conv) => (
              <li key={conv.id} className="mb-4 bg-gray-light py-2 px-2">
                <div
                  className=" flex flex-row items-center justify-between"
                  onClick={() => {
                    onSelectConversation(conv.id);
                  }}
                >
                  <span>{conv.messages[conv.messages.length - 1]?.text}</span>
                  <button
                    onClick={() => {
                      onDeleteConversation(conv.id);
                    }}
                  >
                    <TrashIcon className="h-6 w-6" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden w-full">
          <Transition
            as={React.Fragment}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Disclosure.Panel
              static
              className="fixed inset-top-4 mr-8 bg-gray-extralight h-full z-50 "
            >
              <div className="flex flex-col items-center p-6    ">
                <ul>
                  {conversations.map((conv) => (
                    <li key={conv.id} className="mb-4 bg-gray-light py-2 px-2 ">
                      <div
                        className=" flex flex-row items-center justify-between"
                        onClick={() => {
                          onSelectConversation(conv.id);
                        }}
                      >
                        <span>
                          {conv.messages[conv.messages.length - 1]?.text}
                        </span>
                        <button
                          onClick={() => {
                            onDeleteConversation(conv.id);
                          }}
                        >
                          <TrashIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Disclosure.Panel>
          </Transition>
        </div>
      </Disclosure>
    </div>
  );
};

export default DesktopSidebar;
