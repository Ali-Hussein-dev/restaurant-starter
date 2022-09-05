import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import * as React from "react";
import { Section } from ".";

//======================================
export const Form = () => {
  const { t } = useTranslation();
  //======================================return
  return (
    <section id="#form" className="px-1  py-28 element">
      <div className="px-3 mx-auto border border-b-8 border-l-8 rounded-sm py-14 lg:w-4/6 bg-base-200">
        <div className="max-w-4xl px-6 pt-4 col-center gap-y-10 md:flex-row md:justify-between md:gap-x-14 h-4/6">
          <div className="p-16 bg-base-300/80 rounded-[25%_75%_75%_25%_/_80%_27%_73%_20%]">
            <div className="relative aspect-square h-52">
              <Image
                layout="fill"
                src="/mail.svg"
                alt="mail"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="mb-4">
              <h3 className="mb-2 h3 text-primary">Get in Touch</h3>
              <p className="w-11/12 mx-auto text-center md:w-10/12">
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at atque vitae autem.
              </p>
            </div>
            <div className="row-center gap-x-2">
              <input
                type="text"
                placeholder={t("form.name")}
                className="w-full rounded input input-bordered"
              />
              <input
                type="email"
                placeholder={t("form.email")}
                className="w-full rounded input input-bordered "
              />
            </div>
            <textarea
              className="w-full rounded textarea textarea-bordered"
              placeholder={t("form.description")}
            ></textarea>
            <button
              type="submit"
              className="btn w-full text-xl uppercase bg-transparent border-none rounded"
            >
              {t("form.submit")}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
