<template>
  <div>
    <!-- <div class="mb-3">
      <b-button class="btn btn-info-outline btn-sm" v-b-toggle href="#userStruktur" @click.prevent>User struktur</b-button>
    </div>

    <b-collapse id="userStruktur">
      <b-card title="Kelola struktur">
        <struktur />
      </b-card>
    </b-collapse> -->

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Nama Lengkap"
      label-for="fullname"
      :class="{ 'form-group--error': $v.form.fullname.$error }"
    >
      <b-form-input
        v-model.trim="$v.form.fullname.$model"
        id="fullname"
        size="sm"
      ></b-form-input>
      <b-form-text id="fullname" v-if="!$v.form.fullname.required">
        <i class="text-danger">Nama lengkap is required</i>
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Password"
      label-for="password"
      :class="{ 'form-group--error': $v.form.password.$error }"
    >
      <b-form-input
        :type="types"
        v-on:keyup="cek"
        v-model.trim="$v.form.password.$model"
        id="password"
        size="sm"
      ></b-form-input>
      <b-form-text id="password" v-if="!$v.form.password.required">
        <i class="text-danger">Password is required</i>
      </b-form-text>
      <b-form-text id="password" v-if="!$v.form.password.minLength">
        <i class="text-danger">Password min length is 8</i>
      </b-form-text>
      <b-form-text id="repeatPassword" v-if="error">
        <i class="text-danger"
          >Repeat Password is not matches and min length is 8</i
        >
      </b-form-text>
      <b-form-text id="password" v-if="this.$route.params.id">
        <i class="text-black">Optional</i>
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Repeat Password"
      label-for="repeatPassword"
      :class="{ 'form-group--error': $v.form.repeatPassword.$error }"
    >
      <b-form-input
        :type="types"
        v-on:keyup="cek"
        v-model.trim="$v.form.repeatPassword.$model"
        id="repeatPassword"
        size="sm"
      ></b-form-input>
      <b-form-text id="repeatPassword" v-if="!$v.form.repeatPassword.required">
        <i class="text-danger">Repeat Password is required</i>
      </b-form-text>
      <b-form-text
        id="repeatPassword"
        v-if="!$v.form.repeatPassword.sameAsPassword"
      >
        <i class="text-danger">Repeat Password is not matches</i>
      </b-form-text>
      <b-form-text id="repeatPassword" v-if="error">
        <i class="text-danger"
          >Repeat Password is not matches and min length is 8</i
        >
      </b-form-text>
      <b-form-text id="password" v-if="this.$route.params.id">
        <i class="text-black">Optional</i>
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Struktur"
      label-for="id_struktur"
      :class="{ 'form-group--error': $v.id_struktur.$error }"
    >
      <v-select
        v-model.trim="$v.id_struktur.$model"
        :options="strukturOptions"
        :value="id_struktur"
        @input="getSub1"
      ></v-select>
      <b-form-text id="id_struktur" v-if="!$v.id_struktur.required">
        <i class="text-danger">Struktur is required</i>
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Sub Struktur"
      label-for="id_struktur_child1"
    >
      <v-select
        v-model="id_struktur_child1"
        :options="sub1Options"
        :value="id_struktur_child1"
        @input="getSub2"
      ></v-select>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Sub Sub Struktur"
      label-for="id_struktur_child2"
    >
      <v-select
        v-model="id_struktur_child2"
        :options="sub2Options"
        :value="id_struktur_child2"
        @input="getSub3"
      ></v-select>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Email"
      label-for="email"
      :class="{ 'form-group--error': $v.form.email.$error }"
    >
      <b-form-input v-model.trim="$v.form.email.$model" id="email" size="sm">
      </b-form-input>
      <b-form-text id="email" v-if="!$v.form.email.required">
        <i class="text-danger">email is required</i>
      </b-form-text>
      <b-form-text id="email" v-if="!$v.form.email.email">
        <i class="text-danger">please input a valid email</i>
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Nomor WA"
      label-for="nomor_wa"
      :class="{ 'form-group--error': $v.form.nomor_wa.$error }"
    >
      <b-form-input
        v-model.trim="$v.form.nomor_wa.$model"
        id="nomor_wa"
        size="sm"
      ></b-form-input>
      <b-form-text
        id="nomor_wa"
        v-if="
          !$v.form.nomor_wa.required ||
          !$v.form.nomor_wa.numeric ||
          !$v.form.nomor_wa.maxLength
        "
      >
        <i class="text-danger"
          >Nomor WA is required, numeric and max length is 15</i
        >
      </b-form-text>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="Kop Surat"
      label-for="kop"
      :class="{ 'form-group--error': $v.file.$error }"
    >
      <b-form-file
        v-model.trim="$v.file.$model"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-form-text id="kop" v-if="!$v.file.required">
        <i class="text-danger">Upload kop surat</i>
      </b-form-text>
      <div class="mt-3">Selected file: {{ form.kop ? form.kop : "" }}</div>
    </b-form-group>

    <b-form-group
      label-cols="4"
      label-cols-lg="2"
      label-size="sm"
      label="TTD Surat"
      label-for="ttd"
      :class="{ 'form-group--error': $v.file2.$error }"
    >
      <b-form-file
        v-model.trim="$v.file2.$model"
        :state="Boolean(file2)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <b-form-text id="ttd" v-if="!$v.file2.required">
        <i class="text-danger">Upload ttd surat</i>
      </b-form-text>
      <div class="mt-3">Selected file: {{ form.ttd ? form.ttd : "" }}</div>
    </b-form-group>

    <button class="btn btn-sm btn-primary float-right" @click="submit">
      Simpan User
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {
  required,
  sameAs,
  email,
  minLength,
  maxLength,
  numeric,
  requiredIf,
} from "vuelidate/lib/validators";
import struktur from "./struktur.vue";

export default {
  components: { struktur },
  async created() {
    if (this.$route.name === "user-edit-id") {
      this.form = {
        fullname: this.userID.fullname,
        email: this.userID.email,
        id_struktur: this.userID.id_struktur,
        id_struktur_child1: this.userID.id_struktur_child1,
        id_struktur_child2: this.userID.id_struktur_child2,
        nomor_wa: this.userID.nomor_wa,
        kop: this.userID.kop,
        ttd: this.userID.ttd,
      };
      this.$axios
        .get(`user/getStruktur/${this.userID.id_struktur}`)
        .then((res) => {
          this.id_struktur = res.data.data;
        });
      this.$axios
        .get(`user/getSub_struktur/${this.userID.id_struktur_child1}`)
        .then((res) => {
          this.id_struktur_child1 =
            res.data.data[0].label == "0" ? [] : res.data.data[0];
        });
      this.$axios
        .get(`user/getSub_sub_struktur/${this.userID.id_struktur_child2}`)
        .then((res) => {
          this.id_struktur_child2 =
            res.data.data[0].label == "0" ? [] : res.data.data[0];
        });
    }
  },
  data() {
    return {
      form: {
        fullname: "",
        email: "",
        password: "default123",
        repeatPassword: "default123",
        id_struktur: 0,
        id_struktur_child1: 0,
        id_struktur_child2: 0,
        nomor_wa: "",
        kop: "",
        ttd: "",
      },
      id_struktur: 0,
      id_struktur_child1: 0,
      id_struktur_child2: 0,
      strukturOptions: [],
      sub1Options: [],
      sub2Options: [],
      types: "password",
      error: false,
      file: null,
      file2: null,
    };
  },
  validations: {
    form: {
      fullname: {
        required,
      },
      password: {
        minLength: minLength(8),
        required: requiredIf(function () {
          return this.$route.name === "user-add";
        }),
      },
      repeatPassword: {
        sameAsPassword: sameAs("password"),
        required: requiredIf(function () {
          return this.$route.name === "user-add";
        }),
      },
      email: {
        required,
        email,
      },
      nomor_wa: {
        required,
        numeric,
        maxLength: maxLength(15),
      },
    },
    id_struktur: {
      required,
    },
    file: {
      required: requiredIf(function () {
        return this.$route.name === "user-add";
      }),
    },
    file2: {
      required: requiredIf(function () {
        return this.$route.name === "user-add";
      }),
    },
  },
  mounted() {
    this.$axios.get(`user/struktur`).then((res) => {
      this.strukturOptions = res.data.data;
    });
    this.$axios
      .get(`user/sub_struktur/${this.form.id_struktur}`)
      .then((res) => {
        this.sub1Options = res.data.data;
      });
    this.$axios
      .get(`user/sub_sub_struktur/${this.form.id_struktur_child1}`)
      .then((res) => {
        this.sub2Options = res.data.data;
      });
  },
  computed: {
    ...mapState("user", {
      forms: (state) => state.user,
      userID: (state) => state.userID,
      errors: (state) => state.errors,
    }),
  },
  methods: {
    ...mapActions("user", ["getuserID", "storeuser", "updateuser"]),

    async submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.failed("Pastikan semua fields diisi!");
      } else {
        await this.uploadFile();
        await this.uploadTTD();
        if (this.$route.name === "user-edit-id") {
          if (this.error == false) {
            this.loader("Saving user data");
            let form = Object.assign({ id: this.$route.params.id }, this.form);
            this.$axios
              .post(`/user/${form.id}`, form)
              .then(() => {
                this.success("Data telah disimpan");
                if (
                  this.$store.state.auth.user[0].id_user ==
                  this.$route.params.id
                ) {
                  this.$router.push(
                    `/user/edit/${this.$store.state.auth.user[0].id_user}`
                  );
                } else {
                  this.$router.push("/user");
                }
              })
              .catch((e) => {
                this.failed(e);
              });
          } else {
            this.failed("Pastikan semua fields diisi!");
          }
        } else {
          this.loader("Simpan user data");
          this.$axios
            .post("/user", this.form)
            .then(() => {
              this.success("Data telah disimpan");
              this.$router.push("/user");
            })
            .catch((error) => {
              if (error.response) {
                const e = [];
                Object.keys(error.response.data).forEach((key) => {
                  e.push(error.response.data[key][0]);
                });
                this.failed(e);
              }
            });
        }
      }
    },
    async uploadFile() {
      if (this.file != null) {
        const formData = new FormData();
        formData.append("file", this.file);
        await this.$axios
          .post(`user/upload/${this.$route.params.id}`, formData)
          .then((res) => {
            this.form.kop = res.data;
          })
          .catch((e) => {
            this.failed("Whoops tidak dapat mengupload file!");
          });
      }
    },
    async uploadTTD() {
      if (this.file2 != null) {
        const formData = new FormData();
        formData.append("file", this.file2);
        await this.$axios
          .post(`user/upload/${this.$route.params.id}`, formData)
          .then((res) => {
            this.form.ttd = res.data;
          })
          .catch((e) => {
            this.failed("Whoops tidak dapat mengupload ttd!");
          });
      }
    },
    getSub1() {
      if (this.id_struktur !== null && this.id_struktur.code) {
        this.form.id_struktur = this.id_struktur.code;
        this.$axios
          .get(`user/sub_struktur/${this.form.id_struktur}`)
          .then(async (res) => {
            this.sub1Options = res.data.data;
            this.id_struktur_child1 = [];
            this.id_struktur_child2 = [];
            this.sub2Options = [];
          });
      } else {
        this.id_struktur_child1 = [];
        this.sub1Options = [];
        this.id_struktur_child2 = [];
        this.sub2Options = [];
      }
    },
    getSub2() {
      if (this.id_struktur_child1 !== null && this.id_struktur_child1.code) {
        this.form.id_struktur_child1 = this.id_struktur_child1.code;
        this.$axios
          .get(`user/sub_sub_struktur/${this.form.id_struktur_child1}`)
          .then((res) => {
            this.id_struktur_child2 = [];
            this.sub2Options = res.data.data;
          });
      } else {
        this.id_struktur_child2 = [];
        this.sub2Options = [];
      }
    },
    getSub3() {
      if (this.id_struktur_child2 !== null && this.id_struktur_child2.code)
        this.form.id_struktur_child2 = this.id_struktur_child2.code;
      // this.$axios.post().then(() => {});
    },
    success(params) {
      this.$swal({
        width: 300,
        icon: "success",
        title: "Congrats!",
        text: params,
      });
    },
    failed(params) {
      this.$swal({
        width: 300,
        icon: "error",
        title: "Oops...",
        text: params,
      });
    },
    loader(params) {
      this.$swal({
        title: "Please wait",
        width: 300,
        text: params,
        imageUrl: "/Rocket.gif",
        showConfirmButton: false,
        allowOutsideClick: true,
      });
    },
    cek() {
      if (this.$route.name === "user-edit-id") {
        if (this.form.password == "" && this.form.repeatPassword == "") {
          this.error = false;
        } else {
          if (
            this.form.password !== this.form.repeatPassword ||
            new String(this.form.password).length < 8 ||
            new String(this.form.repeatPassword).length < 8
          ) {
            this.error = true;
          } else {
            this.error = false;
          }
        }
      }
    },
  },
};
</script>

<style>
</style>
