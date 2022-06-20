import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ContactDataService from "../services/ContactService";

const initialState = {
  list: {
    loading: false,
    data: [],
  },
  detail: {
    loading: false,
    data: {},
  },
  form: {
    loading: false,
    status: null,
    hasSubmit: false,
    statusCode: null,
    message: "",
  }
};

export const createContact = createAsyncThunk(
  "contact/create",
  async (data) => {
    const response = await ContactDataService.create(data);
    return {data, response};
  }
);

export const updateContact = createAsyncThunk(
  "contacts/update",
  async (data) => {
    const response = await ContactDataService.update(data.id, data);
    return {data, response};
  }
);

export const retrieveContacts = createAsyncThunk(
  "contacts/retrieve",
  async () => {
    const res = await ContactDataService.getAll();
    return res.data;
  }
);
export const retrieveContact = createAsyncThunk(
  "contact/retrieve",
  async (id) => {
    const res = await ContactDataService.get(id);
    return res.data;
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async ({ id }) => {
    await ContactDataService.remove(id);
    return { id };
  }
);



export const resetDetail = createAsyncThunk(
  "contact/reset",
  async () => {
    return true;
  }
);

export const resetForm = createAsyncThunk(
  "contact/reset-form",
  async () => {
    return true;
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(retrieveContacts.pending, (state) => {
      state.list.loading = true;
      state.list.data = [];
    })
    builder.addCase(retrieveContacts.fulfilled, (state, action) => {
      state.list.loading = false;
      state.list.data = action.payload.data;
    })
    builder.addCase(retrieveContact.pending, (state) => {
      state.detail.loading = true;
      state.detail.data = {};
    })
    builder.addCase(retrieveContact.fulfilled, (state, action) => {
      state.detail.loading = false;
      state.detail.data = action.payload.data;
    })

    builder.addCase(createContact.pending, (state) => {
      state.form = {
        loading: true,
        hasSubmit: false,
        statusCode: null,
        message: "",
      };
    })
    builder.addCase(createContact.fulfilled, (state, action) => {
      state.form = {
        loading: false,
        hasSubmit: true,
        statusCode: action.payload.response?.status,
        message: action.payload.response?.data?.message,
      };
    })
    builder.addCase(createContact.rejected, (state, action) => {
      state.form = {
        loading: false,
        hasSubmit: true,
        statusCode: 400,
        message: action.error?.message,
      };
    })
    builder.addCase(updateContact.pending, (state) => {
      state.form = {
        loading: true,
        hasSubmit: false,
        statusCode: null,
        message: "",
      };
    })
    builder.addCase(updateContact.fulfilled, (state, action) => {
      state.form = {
        loading: false,
        hasSubmit: true,
        statusCode: action.payload.response?.status,
        message: action.payload.response?.data?.message,
      };
    })
    builder.addCase(updateContact.rejected, (state, action) => {
      state.form = {
        loading: false,
        hasSubmit: true,
        statusCode: 400,
        message: action.error?.message,
      };
    })
    builder.addCase(resetDetail.fulfilled, (state) => {
      state.detail.loading = false;
      state.detail.data = {};
    })
    builder.addCase(resetForm.fulfilled, (state) => {
      state.form = initialState.form;
    })
  },
});

const { reducer } = contactSlice;
export default reducer;