import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../../redux/app/store";
import Main from "./Main";

jest.mock("axios", () => ({
  __esModule: true,

  default: {
    get: () => ({
      data: [
        {
          title: "my title",
          note: "my note",
        },
      ],
    }),

    post: () => ({
      data: [
        {
          title: "my title",
          note: "my note",
        },
      ],
    }),

    delete: () => ({
      data: [
        {
          title: "my title",
          note: "my note",
        },
      ],
    }),
    put: () => ({
      data: [
        {
          title: "my title",
          note: "my note",
        },
      ],
    }),
  },
}));

describe("Header tests suits", () => {
  it("Should be render the app correctly", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    const note = screen.getByPlaceholderText("Ajoutez une note...");
    expect(note).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Ajouter");
  });

  it("Should be able to open title input when textarea is focus", async () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    screen.getByPlaceholderText("Ajoutez une note...").focus();
    const title = await screen.findByPlaceholderText("Titre");
    expect(title).toBeInTheDocument();
  });

  it("Should be able to write in the input & textarea then send the data", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    screen.getByPlaceholderText("Ajoutez une note...").focus();
    const title = screen.getByPlaceholderText("Titre");
    const note = screen.getByPlaceholderText("Ajoutez une note...");
    fireEvent.change(title, { target: { value: "my title" } });
    fireEvent.change(note, { target: { value: "my note" } });
    expect(title.value).toBe("my title");
    expect(note.value).toBe("my note");
    const button = screen.getByText("Ajouter");
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    const newTitle = screen.getByText("my title");
    const newNote = screen.getByText("my note");
    expect(newTitle).toBeInTheDocument();
    expect(newNote).toBeInTheDocument();
  });

  it("Should be able to remove notes", () => {
    render(
      <Provider store={store}>
        <Main />
      </Provider>
    );

    const newNote = screen.getByText("my note");
    const newTitle = screen.getByText("my title");
    expect(newNote).toBeInTheDocument();
    expect(newTitle).toBeInTheDocument();
    const editButton = screen.getByAltText("edit");
    expect(editButton).toBeInTheDocument();
    fireEvent.click(editButton);
    const deleteButton = screen.getByAltText("supprimer");
    expect(deleteButton).toBeInTheDocument();
    fireEvent.click(deleteButton);
    expect(newNote).not.toBeInTheDocument();
    expect(newTitle).not.toBeInTheDocument();
  });
});
