import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import * as React from "react";
import { Section } from ".";

//======================================
export const Form = () => {
  const { t } = useTranslation();
  //======================================return
  return (
    <Section id="#from">
      <div>
        <div className="col-center gap-y-10 md:flex-row md:justify-between md:gap-x-14 px-6 max-w-5xl h-4/6">
          <div className="p-16 bg-base-300/70 rounded-[25%_75%_75%_25%_/_80%_27%_73%_20%]">
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
            <div>
              <h3 className="h3 mb-2">Get in Touch</h3>
              <p className="">
                Ut possimus qui ut temporibus culpa velit eveniet modi omnis est
                adipisci expedita at voluptas atque vitae autem.
              </p>
            </div>
            <div className="row-center  gap-x-2">
              <input
                type="text"
                placeholder={t("form.name")}
                className="rounded input input-bordered w-full "
              />
              <input
                type="email"
                placeholder={t("form.email")}
                className="rounded input input-bordered w-full "
              />
            </div>
            <textarea
              className="rounded textarea textarea-bordered w-full"
              placeholder={t("form.description")}
            ></textarea>
            <button
              type="submit"
              className="btn w-full rounded bg-transparent border-none text-xl"
            >
              {t("form.submit")}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};
