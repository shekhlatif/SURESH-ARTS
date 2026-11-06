import * as THREE from "three";

const galleryData = [
  {
    category: 'Wall Paintings',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlhpxx2V33JG83WCapFrs3b-VvFBmcHmAl8SBeyON2uzXRZDB6V47TYP1sw1HXvuAVuzcL1RLNilBN5ATJf1nL07KXM6jHb_Ieo5stryEbdjRzQTwrsL8fm8mw6fUt4YA_Hh410nRv1YWPevw2eNs1oMOmw78JaQguCmuStuGh_jbuS5SI8YU4LjZQoAc/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.32%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheuFnrM2VN3kirkxz9cIAJT0O6wki1MC6WwyVLvzCmV_qs9lYAwnp40VG_WPLJs95Dg7706bdKzzmrMitXyzO5YJsR8sD8s2qeX1JDgMjEC4EK_dMUiGfXYVtMOM51opwc3d8PZ6qA4Q6SkTVa50x5ur9_tPEpZfQl3X_uZS7gFHbsb3uqac2j1SirihI/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.32%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgACOExtThATQp_fD65ilPLeAaQoiDWqJVH1F-RsGbBbjGsuMURM-cQcw_yAJ7AlSU1iAU2ul3GI97llrX2bCMyz4FSVoIi86Wr80-UApwcSSd-n5fCVWOORwHzBjyaeXbi3qgB46yhILfWnFUetwjv7p_U4QjMqUuGTVke6pgD2yatq5bwawpML_q0wu4/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.30%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-dM_sYLzH7wEcgArd4oqe7RlTWZUtJ_Qn7pgnMfrM0ZffdQIL-2VUcPkRh8QYvud2k3ormyv130ykQzcKIc4KoVf4bpeRjFj7XXWsH2ZHyN88jK7bXU-p-hW46K4qVnW6uLlc5CypCPJD7AFPzCTfVtjpQ0HEE0UpgrBDgmAN9dBe-s_B-uEmupdLUAU/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.29%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1QaHYAK89GJCAcLcIkqNqwWSs1LgVIPpuBKItSNN-dWh4fMoMBpRq0YyNEkXYA19vGlyQZdeSiAHW-I9vCsOyD21lcbIhwvjblRzFNHYbYgQN6yIc1ZZD7WHPkuOZ_kobRh7q3I0wU0aXewBP2kQu7tgRNL1exloIGBHUBS2NiYfqG-FQwlHdseVQqS0/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.27%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgF0Bt9oHCRA7aywIuHCF7rSzQcnLjeExq-qdtcxfEcK7w_MLhldz_1UCBYhgkVejIBkvp1-AUAyNVw8Hg7yGH42MUN3ave4zso8GEVVycn6mFDDFa1VoK3xe-34EXcX1L4ToC8SGrQU-KU8gxDje6kCjxzwKe0RoLtQEkp2VEg8mjTug1J-PObrvnICHA/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.26%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3yQBtEjuY0A_KYe25XNsmTDEHZE5GkFtZkx9WRhtFAo0MwN4nY9BuL8ifChmM7huzWFipumLJnk-MgWkw5AnuErvmKpC2LyziGrTXQuCkttxvXjKLAUGqevVtUJbphH09HDLuKRdonNkJrgqBInNeN3ZioHOxpx-2wtu0xkhqyBeaTS5Adhc_gB_6cCc/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.24%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjSSHozfDJ4ARfI8QtRPyqrXVm4utF5I3CCawTM6j6MdPHPaFaRw_I4QmoCpMOz5hBNQSz6eT3z_M_8enM9l4me5aR3NNcA8ycq85Rz4lAVWcr8wuFhHMx266iOTDfxVRmY86CeaVwDvyAh0IiJev2gAjOE2vxLiCkMfoU5-37XY71I6lKuRPX89oOAd-8/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.22%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqY3lTUxh8ou3eDLKDvKauPgt4rmu1qb1EVeW6m2italtlCzmEPC_Ok99l88414D3bEUlB4JFMq3jSYjX5T5f6YSilODlUBPJRGv32plmUJMzDOuy6E1Agl1tlOwZqylqAxQmDyiJPJ6cqI6HaoXUgjhYZ-PnGJMu1GLNfgF39UTD5X3ZYM49KEvL6_Yo/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.20%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjEKfk0nsup5L4XV6oVY_6bdJbw_ANk3nZ1g6EX8hj1bza-trX5GfC0EWz-ggch3M3Nllv-wiFTaDJhlaxUcBP8Moh-0fjELagJzQN8lp39up0qXwN2JT9sFQF-PYU7RMmv8XkMARK3xK7IYuywQH7U5HXwmQt382sJm8Y2Ug66J5dl8TGgViGe6-7DEj4/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.19%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXh885hGYNcWGs8Oal16qI21yx8-0gsateY3KraTDi1dqGT-OqtIBEmNyNrr_ld2I-J2jnH9oggNw5jN6lcsOV5aPRaDblz6pPeWf0Xcfbhm39dtVZNdeM2j9vCXQjGvFu9DCE5vweoBWjQLt0Z0vsMHGdlviB3rBVxUFaXcGj68qujCkrZNimhZhff24/s1600/WhatsApp%20Image%202026-11-02%20at%203.57.03%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhD2TbcIibiM3lcE0RkRo7zQVC0_zH7RzQ1lZLuhrZlTbrCHnablOMkA-aO64otsHeJoN-D2LVxsOnzKDhYXoMJV0wZrngGB5iMAg8MYxNSbPFU5tViMzJjw-qSnwhda7fjM8et9BWX5QF4ua7XcMScmd0uxOuGrg7-cgnQU3_-keD1QxBdghFNrNgj54Y/s1600/WhatsApp%20Image%202026-11-02%20at%203.56.54%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEildGVxsOIekrUcuk0C8_6BQU0Hn016_pRhv9hFc-wIpRV1A6aTX6CMWWwa7bDc_Yj7yOG4IwwdUc0hSqXH10086AaSfutIVWmBMPYIoohEzDXhgwb-SpQjNgBV_8q-BbfFcfuYMZBjQtIU8rrZAR84Jq2SYfD_MsOSXLne23Br7eeVacp2pAkamYEc4II/s1600/WhatsApp%20Image%202026-11-02%20at%203.56.54%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBf6EXUdXOubfMSQKbdUmh2kH9nZBpFk7NYbmrG8sIvPF4A8garlt1qw2bdFKMxf0XBn4NjTcRcMleoPaXM8pB4deOFVf6ywZnqRJqR8ccc1lZrT-io13NB1fY-ebsQq5UQ3X6TpX2pFXjkwiffSLZbYXhAVHWlPESu28UsLzZ2NWWMIP6UpmEU-x0FaY/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.38%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuyPnXa4rAm8rMvvKT1j3lO4w0zRc4t5r7RApuIImCQfw0PW6vZqB9mAEKb-ylCxt2zoNg86n_GCLyffx-GdvQfWbvKcLCjv393yloBRQC735OdCpGGacPqzgfB97JkFGgPSvs-WMU2nOYZ1-WeI25aJeHPS1mW7l1Yr9snadp9T4eznt7ygzmLLdjSd8/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.38%20PM%20%282%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_hBTjEFonBaOEM9DOG8WkXnaqUFIYDDVlqtcxkcG1dJrE4hzxesSsXIQLwq5qQFJEz25oW6lYAZhKrQDfgUDyBIH-IwOmeE1JT94zF0BzePrZzWepVbg-ctYmdZsNMmsG4Rd213LkmrJTtgJ2i8xa8ylkwOI2u3hs5Ed1p_aYTaO3PM3QJuZMcK5Az5Y/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.38%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhVVUksQKYowCXRywBOmWISZshjyo4yPqnC0nImY8GA9SQkBh0pS9YmqYMSXJC39qaKgCc6lsGwoRUcLejtivuUVofGiVC7_Nno3jKS1T2k9csjvpIaDOM7ef97H3JMxM68gi5M2vQ0ibeKItz9e7CS7co57HN0mHJ528LeHGPtTHzvRH7bo82o-ukSkg/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.37%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgi8El0CIJk-PQ55RykZ30yZ8bIxJVHnYTXug9rqcaFrEt0wkCwF5ggH0BeURvDCodREr10V1gH_gCu5VWkMzcxKTnKf9ew9H8CdcwBsnClQ9SDCUTGPms_d_ixgcCvVR18G-nyrWUKt3SrdvMyCACZj3NRQ4D-iBtV3UTvS-2PI1Mycq8MhtYOXSrcl4/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.37%20PM%20%283%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgIZhnFsAZGGYXH8wWXAPwCAjvTYnq-GnGPRfmgCcZsYgNSOguwXHKUXRyTtIR9QNCi8z0JLgmjZ6Gg_pocTpXZ1CTQrnYQirto209msgr8tgmMrsAmqO4mtRIxltNGsvaj0sUjsOhB6E5oNA4xzByL4CyXXEbYAZ32j3o_g2ZL5HdW88eSAOX-x-uBCuU/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.37%20PM%20%282%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhF_Sl9LAezKbZhrXEoKN-Y3VXiZ3DxDCWaCZHu0onx1-yGletSEnKau1SErg_ofDcebBtFYLOWtm1VCDH5mvCM-1vM5YbpfHciY2qPZfVzHABUkQTMTKObKkoEcEWcIS0g4WJ24LnGrFNjk1r78RFmmkrHfbAWdciw3K_Y7U3auVE01Rn6j5dzxFHCUxE/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.37%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi8lgB9Ax2_Xdzt44cApky1Y3Q_YdFN6ABMoNBOmhYEeffdNoYdNoi_yDoIVUxHiy4Mo-y9CN3PL2KFwI7-w5V9GRFwO9LbqPQhiBltzs2BW6cuyh7UaYf4pmRVfRNYBWURn5R6tB9Sg8n5k1rET5xsT1vxJMi-G1qi8vNqakEuqNgkKmmLYdNf-t9cQeY/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.36%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlG2fIJMAlJA9kXaRMQtexXFhl2tGrjqttYqZ-P21nFwTQnKpJ9-hFZE2VG4Jf7NsU_W9t38Laz0IHOjj-oET6yQqWSh0x1FKmFzf2OyREzy_3i5LwKW0C-I0V_erBRQa7mTHr2klAFFgbjC-6fMvrIjfihZtuK2yH500Ul5_9q8wABnddk_tyIrfRiWY/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.36%20PM%20%282%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyHrxp-9hWrQSMQPk_25LpCV_yssgeIUEAM1oiacV_h8RwnTbzjbwcS2yugod0YvtpUbz9ycQkdp-3Hn7NFDknPhFXHduSf_LNGePkw4L2TjUlAyS61gSqxo7xUJ-BB_AD-TFhtG_bEc1JdXe0txwYIXFwjtPYgmal4sM5JCuCU7ZyXJxzrrSaBBJvHJY/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.36%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIvf8_XvUA7v_ai6ZktHswi-6EvzqXNT0YdikOAxlBEY_0-iin7gGSABRivYCp0xU3M3Fhe8S3-du1rUvXyLGJYNL-y7lCezZWqo8a4I0DcggRj84GAUoDxdX50feYKGmMZ07vql_j0fvO5zqkzBDb_iwyWg2hS1yjEqZcB2veWqjQLaek5NrfvfIBC5U/s1600/WhatsApp%20Image%202026-11-02%20at%203.48.35%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhohSBRspvN8s05zf7ful_EgWAJYq7qDzcR86oHU9-tA0_G8P4e7mKy9HcOQ46cIqOaF5WLsivpsH-uYZ92OxXBWKFelAZ5Su99-YIHW31dzAWTXyao9xDq5i2HLGVaH1rkwwvqThlKws2lYdIKac4WUXeYf1qwdKtIyZrOiOMuADYFsDZkMfyOi-CGwVc/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.44%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9AW2PpMOk2b-DQQyTvoaW2qdgDYknBZQ0lQ4LPTU47ndY3RPhUiOCP89I-2-Z2aHPu2GblqLgchAr2x9bQSIfOfoOMrs7khD1LBRF6Ig7jb2dnVVb6O7Ap10Nb6mfgTG6hDSww3VyzciJyk6WnyScho3QAHGN0jjh7pkWhc80xWn9jHQiz0hFCYNw42w/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.42%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcPWlwPB4Rk4w75RNM0DKW88YQ4z-H3Fe2Mno-s2AIL-wepcoXBDeaJW7MjeK9oEEmClKU3vqNNx4CEO0Ea-7bAI8cU1QQOWSI1VzdEHLIVNdatC7IGBl6MRpIvsLLHXtOgdyo2Cqw1ofBjBba5RqOanuQVW500HuBWyTmwkoHf_8yQXd2RRjDLnQWe0s/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.41%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiU-9atg0gg0HHl2Zx2gA174DOYIh_TVl9cy3-QwKO5-9i7P934orjLeLuRCpssMx9ZL6gxZiAbaOUAD7hz6xOmUY5njJrq55UyJRytteXqgSAIpWyT9D6489Oc7v2D1V_HKSc2BddpKGnkoOiXuMqcygLrbsy41-hbGpII73rm_k2U74xn67Tye6fjGH4/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.40%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigPgQomoMxGb00yGES8DB1ZbLHpyp-J6O1ZdHOoPeghskQmwzCX5FgjiM-6BeG4hNamiHkPnzyAvZIj_z4r8iVJrxJElnr7WE8wnjEGMT1phIMLjTudxT3x42GRuikYz56ekpyQ2Lr6vVGMQynzOP_3lPQx5-h5rznGiI0XZPnPi9-HRWBdEqmMgp0oo0/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.39%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhPUzEwDcFi4npKME8Ubg090g676t3fzaxz3QCUqtKtuzKD2zLpIgot4z2Yz_-aEufyq-h9-hTka_7GF-rQJNTn1rQeYUkDVjkqE6O5SspuwTavVCKONSw2MD9ff0bBfdKhsgfp733HRnEoLH-tBOteyKomPxuXCx5gPjc1jCIX9gjdV82mMtdeHFGcVs/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.38%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh_fxSDtTfUl5Bu-wKlLzmSY35FaJgz36nXxuCATghWWlY4OrvJ3-9pgmW6NQLHd-LRF0IaoOYj465TWQ3EURjlLGkxxYrWxTaAz0GpKtMzISYSgh8WggTvtHc_fLqapcJiIxNkdl1sMzVpH2ak-ESHH1EeUcwO8mPjqIWEd_n-0JMTG3GU9EMllgznunk/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.19%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiPjBJAk5OJOCgDbIIvbjelxEvDhqL4TkFmXler5I7YKce9F_d8SBHtWPMOdRy2KiQdynQKm2YQJ1ulW8Z5SxsvKMNnHQVeDXtwqnrWwYN1HoD2vvOKajEsaVyBf42r6UjECH7_R9CzUophy0QjFc4jb9-j0zDof3NGV7GLLpqWctrmElHgOfC64LbVlM/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.03%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyLSolNKN8rcer1wFEzwcOjO_9EoXQa4EWgyI7BgzP7PFt5krDFN8BHmraIDoIRpe0YFBVa4ksfyQyQ74f7iCMHmnIyVRsEYGTZvukIu0LCIHu0v8IQRqFO5ddoym5TrszIexAgSiIlxeDl5gB2CZ2oMZRgWLq7opOle0bi-zKeVpJ7d7Ewe27qKDObno/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.02%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIoFrQuq7iyyxKiLPr8wqogtqrPdZOsYKnaIEtwaQdx_wDluEsqKhyphenhyphenhO5vxopBhef27o6qEBEvG6SAxynpShQNtsl9ls3maB49zRDz2ht5SJ2wFw8se57qOEL0y1mBUg6wy7MwMq0o-eec-ak33DqvdtEpIZPGGy-8cGrsGtfgc_Staufaqqe0zR23MSg/s1600/WhatsApp%20Image%202026-11-02%20at%203.45.01%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEglHNRt9Q3OLeagtOMbOx14iAaJ2Xo1JxpuA_nl4AFIXJWx4I2vdsNlNTiADyjPXYL6sftm0HH61Zd8SZmSZBDzm4bGVlS5KmjkWV5qm8AOfCM9HI1fBTxu38nDVd0a0n3tSg5CZ2So9PREft5McitVvX3Dd9Sf1_LLsjF_K55ysT73d2NHePGH2aJE-cg/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.59%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVwHv2aM_rL35vM_EHtlnNQQHfl_2K3oNR8lc9A75KWNz4ue9oa8dmhzipryS-acZthzZO9FsE1teEBtYDXuaAh0564vOt4dALEa9uKnwPX0VBOHB7sya0R5mmJx2Quy20cQz_RHH70qMcYLzn4EuDM05oxuxzKXVArXvCdr0isOxl6xpXE8rGNR2xkKE/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.58%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvjs2rZeLMn7w2C0lATGqYDKCaAsjXX4in-dIFH17FH27HD7nFMfh90qqqRXrVqLyukkn5CpRMPdTWyFeRxeNBdDuHLZV01QO5ACW8NHeWOXN-rnWyah6qUi44nwBZTL3hMj70ylV9torVl2ylGznQR0lsfjvte0TeG-QrgkcV9V7fUZ8EDuz_OjjEKCE/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.46%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVQEeAIjMEi2Pqm1trc0CeMKzJL1IItqnDZ0UYkEjqj7jvikRnNDk_IAp1kcggGW85fahynErWNkQa1guXrJwCxrNUqI95iXTUIcPbAJJCkO9caj816VqasHxl01Dol11Via_G10t1WvB2BUtDlg87UWxiy9CFuCGgpPfZH6e5xeijWhGa3_pPWoYmuro/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.42%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwdeKRrxGuJeqF8QFvVnbC-zjOU7ZV3orLH1miLsqNbLoKmzNEE5EnwaZNu1w_66d-39qfpF4BTnhUjvzfOugT-xwJHk0LYuU1YgzyJbJIoafXCUdJ6jqcbmR3kbjrtyvpLdqN2n_hQr8gGU8Cd7i3viRmpo3VqCGhFMXqcaNW2Io15IlUxWiAmgPAJBo/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.40%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8y_KUu-sqbvfI6rsmoiL_PhtaZmXyC5yXe_qC8EmpsjxcugXcDIPQUlp1UXtuMW5e8dOy58Eh_EEAJXuAUqH9dz2qwQftAeaakDP_WK7idLKuDfzc2167TBPVA2xSriZ2OAdFnjjjtH3e77ruEVuatAz3g2KAPXcrxO2nQNoVYYP3WuU8S32WmMj1lis/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.38%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnz16JkDKG1z8jfdtK9ZijsGc6PqjbJHt3XajkD2z5e0z8QSAinJ8s0R6yYkkePeLDT9d7ClKth3uXiD0VFuUMjmyhKWrj0G1QCBj5IPpWKmbRKKClV63NMfYqYtmlyXdIaUNGm4RehGUqHJMSMlAn9-16VqYANg1i1P27Bc6nO02Dr45BxaTH5Xz0vMQ/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.37%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0elZbqNgIA0o2R-s2HVoDvUG8C3Uw-4RypcDHxBuAY9klHJqt0sz1pLH-tYB2h8ZPt5jw_INC3zQzsUHl5vRdQhrNyjT651AUsk-ODfjNx6bV97i5pTxCPHpI_JxV0yx6Zs9AZVOB7OVyvIfCR8L4XnGSWbwXDSxTSXxBCG7-zgwtSlCUTDUjdHvnqdw/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.36%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW0Uaw8a3_tUuTFcnhPKHzYvhPOkswzXzw9FGlMp1Jx35pHq-8wNQhrsPpdEQ2_vOJ9BU4TIcMq_HoeSInDCYvLRQjg1sjjLGnTTbVsZ45Lif8LIPXqOMuVsrjibbtIIkA37hxbwl79uIIEyG5k0W_XxdRJ2qGmJpHprFpavsf1iwHMmmycRc4K_R5h4k/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.35%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVEWHzYxnVv_8kQIN3h1Twrc_XwBbvWky46yhRfhfPlg3w6RNT8Ji-wKCcDGScP19TjWeenuZ0GAX6MM2CxIZV0JgywsBvuNBhwuVPalS6FlPXfMjkUo_1cBzGvyfwruzEM9WvijpxTww-7m1yvPP41y-KfCiPk_ZPRm3CYYXVtX-IoUXgTn-SmDhjSXA/s1600/WhatsApp%20Image%202026-11-02%20at%203.44.34%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjAUFbEz6Uxt_bHDdbL-95wjkHL4S4qD-uTy6NqnBicoCuSuujN5TKkh-sUbtmwQablmV3NG-Zcq6ZHBsNnK1iKTxMkEgHRJcHbKgJ8ghWbS584hibGY0NL_8vOn3zu6PtklEtW1-Yx3fL8j4-RT6fv45grzQ2eHcpYPAeMZbw9tE15p51TSEw06o4NyG8/s1600/image.pnghttps://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxPVIsLXwFoaPx36_bkoaJ5253mW-Us3NusRaYurkn-1vwcqxJES3_WciARv1cFwBIlD2EJj33yHw8jvptjrXEmw4Oi7NT-6pR0gGg7kbVJZ2Hew2gyQov_pRMB253adrAnjhYoGJaOUHse0LjgyeqvNx0LiqxZiOZwXz8zJUZIaKK6SjLqBxaa1y2pMI/s1600/suresh%20arts%20wall%2046.jpeg'
    ]
  },
  {
    category: 'Acrylic Paintings',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgj_c_dtFxb1A2yaA382iSfqVHH0N79X89haYQyjuGWA63Hb0Yj3CQknIZKJGI3R8i03tFjyXaA2GIlzptyzRuLu0KvW-Z4qqPcoU1XOMB3bWVl11sfI6n_JaBPpu_-cmp9RowZ4cYdHhspkOg4i7n6HDBOINnfmpdHyjSObqaEU83Owxy77Y6Pvyk12-g/s1600/3.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjHjUHwjWs8fzRzylyip-vbZuQgGYV3xPJuHyQ8NURCI16C0afmGJggA2inwk8mGJphT-ZlrHK64W9vXa2JU1pz9kmiwN703P7RnmPfnRlHke7nLE9xy7aqqZn2iiF9nRPGlIJ7h3tXUWihuuGQzLWwk0DvKUzglZT_eihFZ5MexlTLrd8yEWg2CSJN858/s1600/2.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgVk6nVYKWHBcRyp0X-dNew-jko8aQQ9g9VnwRaCgqDYtoGxq5tUeQEq0U1N4i4hYDL9ifOrDOQCqCfd0Djhq4-ZGh_9WEA2esUoIWCJEM4r_q8QqsHiMryh14lvo0kG25W96Ex3sm5YYRHDYRn92EM2wO1dTmWf61k764_sCbFGq1MEDroiKct0jNx3v0/s1600/1.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEheNWQJ-ltvBrsS2Iy5TrNtBB4nWcGuGhPjDUDBMahp4IshFSFRwrrAkNnlQl0rHbIDw395lMow19GUPfqgOBL_saHTJdau_yIfp5_4TU0DSpRsLgTaA-VQAPhl6_nmDYGLYlQkTHsyK3M-NOAMnePQBCtIL5d8vfQtFAWccT-NQf1K-n1TTHSUqVLFf94/s1600/WhatsApp%20Image%202026-11-02%20at%209.20.38%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhEC684DWSGL1PyYWh57nqyMCxPOmFgwvhOepPt8brB0C6pLbTYpf3FPUGxFzcj1Zi3GUV33Cpy9suF4ajEZC3yc3n6tbJ1xhvHO6pZwyGjhvVBvp_lpbnO_EJxLr51XMBNztvhdE1fAeWsPWUbDKWBwd3H6whb17IEeJWg5nt21_ymuiheuZd0mnAMef4/s1600/WhatsApp%20Image%202026-11-02%20at%209.20.38%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjhJlP9ooP5jHq4U4l1rrYFFowZovMIRM4la0tuHCdKfvCDEKRDe44zGCLrBRSO9UNRiAWCcX1jP_qF_jkwyeqyTB4EWb-aPZ0HgHf6evxFfMS-JTwsFd7-PagGDkEP_jHiWmwb-I0Cxt9FPzoo23_eCUcg2QCmhkZNuuHf7uah37n5uokRO6AKUMGHnPM/s1600/WhatsApp%20Image%202026-11-02%20at%209.20.37%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKpaaPE-nG8A68LZzD3aplo5NYeepbwQ-HAq6Ft9ulbnY8czi3txk-4a1eQSQAV2y8mpEY6cfDA10sVyDnPnOCOimM5kM7hgqs69RDMIBMUX5zuP8M3FB9sVuC0AQHSIKFtnmHeHJc282afamnWynhu8xJHbM7MX-zWB4DP1bLA4FtaJlqAf3qYSbfdqQ/s1600/WhatsApp%20Image%202026-11-02%20at%209.20.37%20PM%20%281%29.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRV3LGa1SJWdrcTn377FPZZr2LvnY7RZOkfDASwy_bSAsIas3rW45sVagexk3GJb98B2Yd2VYBQKrFG2LO4RztePY_5DpdD_5JKqVrMMcAXo9-8a90wir2YM6o2uZY5iVHLmbLyrTcZyNPYuzkUzPKTMdcIkBlbfi4ENV-Ge1rdgUk_C4o5PlD5OWT5Po/s1600/WhatsApp%20Image%202026-11-02%20at%209.20.36%20PM.jpeg'
    ]
  },
  {
    category: 'Landscape Paintings',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzckD_gbP3QI1cmpEy6coygeVUY1GboAq1xKxV533oI2wHjnlN2FaY6FQUoOSEGScTFIz6z80n9qrZDSbyXMSq27JBkUQp9UyQoYJREK7iVpaQn_Qz8DskeVo-zHEwhGGWCBsDcCyX65GCHGO_tiBP3lGrkxTBMaXWikKpYP_40wXljthR1Anz5qEW_y0/s1600/2.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhGwj_UFGwUxTgjPVyz-uJ5IPsXhCC5If2wEn2E_G3-GPLhJP_5j-Bhu14-Nggpg7jPbG65wW97RRX3QWhpWBC5QTIskTylj9P2rEg-t8KIKs8BqYZlOPeQGGmxF4w3YOCRjNrIpgtifmscwYst1ztFtDem0m7teDXb62fFBwFxydGPPewk6WLeZCvEBSQ/s1600/1.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgINsUYfGybgL90t0nrsmi5Y1FcT2o0hU45fIreJ9QvNKK6qKi50arNCClrahNKglHkr8n-IHzdm9g5oSGJdvujjQtRikOhfv3VSecNreSlWVxQLCLu_6rc2VYorfIDx-FiVreP1VH5QjOFok6gkh9ZvfnAzu9b0h1n0fF434A3GWi8nYu3mnU1x3xJ9I/s1600/WhatsApp%20Image%202026-11-04%20at%204.48.20%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxSmGPXau_MA7aTRVt0VSOzzS-7OwuEW5e-2J6LpjSRNr1b-ex7Kz7kP9jULdo2Rw9GVWPZ0u2AERtzwcLoxLdQebHPiwQxrjfv0xUZR4EbyqJg6jCpqPAk_Cf8RRU5FHMMU_gL73E9Glq5weMc2TyXJrlhN8u8gEKVgCw1prhPhBrno-tzbjikWcCvLs/s1600/WhatsApp%20Image%202026-11-04%20at%204.48.19%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEha1ClyHPbmREQaNiFVc39TwPyOhSIFmNQcWvZoL8tdExPuO2dRmBXK5WEBk979-b430fUMRs6xW2CufiMbBDfLvGZnejxtNLQJV6ZVyL8A01T8l0VTasaJuzkzohVc4RWvHxMP3zOdq4ZZZWnt_65BWXDbwXGsCSY5sp_g1wrQ0oTRXk0ntBV0sLRlQ0A/s1600/4.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBSjQWNz6-kHka7XOJRh-W0HocQsJBNJlRZn71010T8CVInOSkdKmjC1fpz64s2lp-DdxjENFfbag50Vkgft34RbD-w3jdr2hQg-8j_6vW2wae7wS0QTgff7isun8DzOiTmaYmlORb3Xi1BTb7dFgmmomT1A_sOT-I670MM31G4EB6AOTQ887JQK18Kvc/s1600/3.jpeg'
    ]
  },
  {
    category: 'Pencil Arts',
    images: [
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1vNRpo2LbYRyYwLK0o3Tv4CC8g5w_55a9-ItW5MjKAzHKQw_i43t9PReuG5_vmyMacvvzj_4gKFW_DYr1lu7WWZkr3KgYD7iDtctFvqFw3rbXovmtPDwGTM2tC9ievhDRgTzot-4ZkgrJZnZNbsPPNKTadrstNffjFMrSUG0toh1jzSVj754f-NJ35KM/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(1).jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjoDQVzZNUFd9hruR7T3P_es7uCUU4HGng5YWGyEo2tWhuA-dJcqgSBoUskGQUPzGWTyzF53vT8E4ZZbgEWGX2weYgs5lMskThk52eLlIIpwI-tdxmmy8aLbg8nRuuzYqSsnpFNCaltDs93nk0dShynPeBaK7qTaJclH4SfthMUnPuYOj3xoXqaj_xdidE/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(2).jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9EChyphenhyphenUo4DzOH8-U2mGHzaExQqUaAwt0F7qdX7ornxvvkSgLqZKzVBWbXG7xdnfQ8DSgWLrTvNLAm-JLRW2yl2op_MHTdRlUTnWTzCzLt6qJy-uRrtyrb-9X5AFgUCkl-nH_4NR6-XnqYm1o16910cq1Llkj13AoqPP9TqommkNJjX-fyGr7dgLoqnDP4/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM%20(3).jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj77xt9JUwLIhnx10BZH2WpeZfiR4oDqK7pVNims3n5oYEmO5EDef2BdWv-w_ms0WglvR6i7zGgM4RStnhs4CnXWuh_lshKc88n9cPEgmizGquu4mmPwvVLJ8WU-C953WY-6USW-HXTHftYpziE9pzGiVOsKJwomUmkSyXSXrqJiWewdnalIk7EMTrLry4/s320/WhatsApp%20Image%202026-05-30%20at%202.24.08%20PM.jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg-liYe3KHBEaX8oNIcmNjt7ipf58WErjSRSoZc4N-ok0idNCKw9UUoCJwfgfrtzp4GajFJip7DMWRlT7p-YAtpfxYRPCM_LOrw2dBSgoFtLruKUu7ZHhgL6tnIhTE18K2JYY_apTAtIqw8zX0-wINtIndmJihVNZF6jxFTu_mDLeDLedmgDuQZ2MEVTFc/s320/WhatsApp%20Image%202026-05-30%20at%202.24.09%20PM%20(3).jpeg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGe3jM8pJA3N9iE75A22VbzbVR_G48vJ2Cy2mpNDtenxFzV0j5ACk5aBpjuIatiYhc-Ivl-KGy6ByQfOTHkEY-K6pOvhyphenhyphenA89DyHMr-_nPw6QKKaFExwSkqifvlOHjS_-_bv_Ii0IAm0yvbsMEBOIwYxNDzWl4lCtYqc7x3ZJzY5OjQkR6cDgXQH8bBc24/s320/WhatsApp%20Image%202026-05-30%20at%202.24.09%20PM.jpeg'
    ]
  }
];

const allArtworks = galleryData.flatMap((group) =>
  group.images.map((src, index) => ({
    src,
    category: group.category,
    title: `${group.category.replace(" Paintings", "").replace(" Arts", " Art")} ${index + 1}`
  }))
);

const categoryImages = Object.fromEntries(galleryData.map((group) => [group.category, group.images]));

const services = [
  ["Acrylic Painting", "Premium acrylic artwork for homes, studios and gifting.", categoryImages["Acrylic Paintings"][0]],
  ["Landscape Painting", "Scenic hand-painted landscapes with rich color depth.", categoryImages["Landscape Paintings"][0]],
  ["Pencil Portraits", "Detailed graphite portraits from your favorite photo.", categoryImages["Pencil Arts"][0]],
  ["Wall Painting", "Custom wall art for homes, cafes, schools and offices.", categoryImages["Wall Paintings"][0]],
  ["Custom Murals", "Large-scale mural concepts designed around your space.", categoryImages["Wall Paintings"][2]],
  ["Canvas Art", "Ready-to-display canvas paintings with premium finish.", categoryImages["Landscape Paintings"][1]],
  ["Name Boards", "Hand-painted signs and name boards with artistic lettering.", categoryImages["Wall Paintings"][5]],
  ["Custom Orders", "Share an idea and commission a one-of-a-kind artwork.", categoryImages["Pencil Arts"][3]]
];

/* =========================================
   SUBTLE 3D ART TOOLS BACKGROUND
   No geometric balls / no particle field.
   Tools stay behind all website content.
========================================= */
const bgCanvas = document.getElementById("bg-canvas");

if (bgCanvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    48,
    window.innerWidth / window.innerHeight,
    0.1,
    100
  );
  camera.position.z = 12;

  const renderer = new THREE.WebGLRenderer({
    canvas: bgCanvas,
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  scene.add(new THREE.AmbientLight(0xffffff, 1.45));

  const warmLight = new THREE.DirectionalLight(0xe9c7a5, 1.8);
  warmLight.position.set(5, 7, 8);
  scene.add(warmLight);

  const greenLight = new THREE.PointLight(0x3f6656, 1.2, 30);
  greenLight.position.set(-7, -3, 7);
  scene.add(greenLight);

  const tools = [];

  const makeMaterial = (color, roughness = 0.48, metalness = 0.12, opacity = 0.26) =>
    new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness,
      transparent: true,
      opacity,
      depthWrite: false
    });

  const woodMat = makeMaterial(0x9b704d, 0.7, 0.02, 0.27);
  const darkGreenMat = makeMaterial(0x315747, 0.42, 0.12, 0.28);
  const creamMat = makeMaterial(0xe9dfc9, 0.5, 0.05, 0.34);
  const brassMat = makeMaterial(0xb98a58, 0.28, 0.68, 0.34);
  const bristleMat = makeMaterial(0x66513d, 0.8, 0.0, 0.3);
  const terracottaMat = makeMaterial(0xb86f4e, 0.5, 0.08, 0.25);

  function addBrush(x, y, z, scale, rotation, speed) {
    const group = new THREE.Group();

    // Long wooden handle
    const handle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.075, 0.105, 1.65, 16),
      woodMat
    );
    handle.position.y = -0.15;
    group.add(handle);

    // Metallic ferrule and two fine rings
    const ferrule = new THREE.Mesh(
      new THREE.CylinderGeometry(0.115, 0.095, 0.34, 16),
      brassMat
    );
    ferrule.position.y = 0.82;
    group.add(ferrule);

    [-0.11, 0.09].forEach((offset) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.105, 0.012, 6, 18),
        creamMat
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = 0.82 + offset;
      group.add(ring);
    });

    // Soft tapered bristles
    const bristles = new THREE.Mesh(
      new THREE.ConeGeometry(0.095, 0.48, 18),
      bristleMat
    );
    bristles.position.y = 1.22;
    group.add(bristles);

    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.025, 0.18, 12),
      darkGreenMat
    );
    tip.position.y = 1.53;
    group.add(tip);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.rotation.x = -0.12;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  function addPencil(x, y, z, scale, rotation, speed, colorMat = terracottaMat) {
    const group = new THREE.Group();

    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.065, 0.065, 1.8, 12),
      colorMat
    );
    group.add(body);

    const woodTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.064, 0.22, 12),
      woodMat
    );
    woodTip.position.y = -1.0;
    group.add(woodTip);

    const graphite = new THREE.Mesh(
      new THREE.ConeGeometry(0.018, 0.08, 8),
      darkGreenMat
    );
    graphite.position.y = -1.14;
    group.add(graphite);

    const endCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.066, 0.066, 0.12, 12),
      brassMat
    );
    endCap.position.y = 0.96;
    group.add(endCap);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  function addMarker(x, y, z, scale, rotation, speed) {
    const group = new THREE.Group();

    const barrel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.105, 0.105, 1.35, 16),
      darkGreenMat
    );
    group.add(barrel);

    const cap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.11, 0.25, 16),
      terracottaMat
    );
    cap.position.y = 0.78;
    group.add(cap);

    const nib = new THREE.Mesh(
      new THREE.ConeGeometry(0.075, 0.2, 16),
      creamMat
    );
    nib.position.y = -0.76;
    nib.rotation.z = Math.PI;
    group.add(nib);

    group.position.set(x, y, z);
    group.scale.setScalar(scale);
    group.rotation.z = rotation;
    group.userData = { baseX: x, baseY: y, speed, phase: Math.random() * 6 };
    scene.add(group);
    tools.push(group);
  }

  // Spread around the viewport edges so headings and artwork remain clear.
  addBrush(-6.2, 2.2, -2.2, 1.15, -0.55, 0.42);
  addBrush(6.0, -2.1, -3.0, 0.92, 0.58, 0.34);
  addPencil(5.4, 3.0, -4.0, 0.95, -0.72, 0.3);
  addPencil(-5.7, -3.0, -3.5, 0.78, 0.62, 0.38, creamMat);
  addMarker(1.0, 4.0, -5.0, 0.8, 0.32, 0.28);

  const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
  let animationFrame = 0;

  window.addEventListener("pointermove", (event) => {
    pointer.targetX = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.targetY = -(event.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  });

  const clock = new THREE.Clock();

  function animateArtTools() {
    animationFrame = requestAnimationFrame(animateArtTools);
    const time = clock.getElapsedTime();

    pointer.x += (pointer.targetX - pointer.x) * 0.025;
    pointer.y += (pointer.targetY - pointer.y) * 0.025;

    tools.forEach((tool) => {
      const { baseX, baseY, speed, phase } = tool.userData;
      tool.position.x = baseX + Math.sin(time * speed + phase) * 0.16 + pointer.x * 0.08;
      tool.position.y = baseY + Math.cos(time * speed * 0.8 + phase) * 0.2 + pointer.y * 0.06;
      tool.rotation.y = Math.sin(time * speed * 0.6 + phase) * 0.12;
      tool.rotation.x = -0.12 + Math.cos(time * speed * 0.5 + phase) * 0.06;
    });

    renderer.render(scene, camera);
  }

  // Respect reduced-motion preferences and keep the scene lightweight.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    renderer.render(scene, camera);
  } else {
    animateArtTools();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrame);
    } else if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animateArtTools();
    }
  });
}

const tabs = document.getElementById("category-tabs");
const gallery = document.getElementById("gallery-grid");
const featuredGrid = document.getElementById("featured-grid");
const servicesGrid = document.getElementById("services-grid");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxClose = document.getElementById("lightbox-close");

function openLightbox(artwork) {
  lightboxImg.src = artwork.src;
  lightboxImg.alt = artwork.title;
  lightboxCaption.textContent = `${artwork.title} . ${artwork.category}`;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}

function renderTabs() {
  tabs.innerHTML = galleryData.map((group, index) => `
    <button class="tab ${index === 0 ? "active" : ""}" type="button" data-category="${group.category}" aria-pressed="${index === 0 ? "true" : "false"}">
      ${group.category}<span>${group.images.length}</span>
    </button>
  `).join("");
}

function renderGallery(category = galleryData[0].category) {
  const group = galleryData.find((item) => item.category === category);
  const artworks = group.images.map((src, index) => ({ src, category, title: `${category} ${index + 1}` }));
  gallery.innerHTML = artworks.map((artwork, index) => `
    <article class="art-card reveal" style="animation-delay:${index * 45}ms" data-index="${index}">
      <img src="${artwork.src}" alt="${artwork.title}" loading="lazy" />
      <div class="art-meta"><span>${artwork.category}</span><strong>${artwork.title}</strong></div>
    </article>
  `).join("");
  gallery.querySelectorAll(".art-card").forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(artworks[index]));
  });
  observeReveals();
}

function renderFeatured() {
  featuredGrid.innerHTML = allArtworks.slice(0, 10).map((artwork, index) => `
    <article class="featured-card reveal" data-index="${index}">
      <img src="${artwork.src}" alt="${artwork.title}" loading="lazy" />
      <div class="featured-meta">
        <span>${artwork.category}</span>
        <strong>${artwork.title}</strong>
        <em class="view-artwork">View Artwork</em>
      </div>
    </article>
  `).join("");
  featuredGrid.querySelectorAll(".featured-card").forEach((card, index) => {
    card.addEventListener("click", () => openLightbox(allArtworks[index]));
  });
}

function renderServices() {
  servicesGrid.innerHTML = services.map(([title, desc, src]) => `
    <article class="service-card reveal">
      <img src="${src}" alt="${title}" loading="lazy" />
      <div>
        <h3>${title}</h3>
        <p>${desc}</p>
        <a class="btn btn-ghost magnetic" href="#contact">Request Quote</a>
      </div>
    </article>
  `).join("");
}

let revealObserver;
function observeReveals() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
  }
  document.querySelectorAll(".reveal:not(.visible)").forEach((el) => revealObserver.observe(el));
}

renderTabs();
renderFeatured();
renderGallery();
renderServices();
observeReveals();

tabs.addEventListener("click", (e) => {
  const button = e.target.closest(".tab");
  if (!button) return;
  tabs.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
    tab.setAttribute("aria-pressed", "false");
  });
  button.classList.add("active");
  button.setAttribute("aria-pressed", "true");
  renderGallery(button.dataset.category);
});

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

document.querySelectorAll(".magnetic").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
    button.style.transform = `translate(${x}px, ${y}px)`;
  });
  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
  });
});

document.querySelectorAll(".hero-portrait, .featured-card").forEach((el) => {
  window.addEventListener("scroll", () => {
    const rect = el.getBoundingClientRect();
    const offset = (window.innerHeight - rect.top) * 0.015;
    el.style.setProperty("--parallax", `${offset}px`);
  }, { passive: true });
});

const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const msg = `Hello Suresh! I'd like to discuss an artwork.%0A%0A` +
      `Name: ${d.get("name") || ""}%0APhone: ${d.get("phone") || ""}%0A` +
      `Email: ${d.get("email") || ""}%0ARequirement: ${d.get("need") || ""}%0A` +
      `Message: ${d.get("message") || ""}`;
    window.open(`https://wa.me/917019920839?text=${msg}`, "_blank");
  });
}
