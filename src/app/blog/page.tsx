import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="flex flex-col px-4">
      <div className="flex flex-col content-center items-center justify-center overflow-hidden ">
        <div className="flex w-screen justify-center bg-slate-900">
          <div className=" py-1">Some Sort of marquee</div>
        </div>
        <div className="py-2">Blog sub</div>
        <div className="mx-auto   h-full w-full max-w-3xl space-y-8  rounded-lg   border border-gray-700 bg-[#001534] px-8 py-4 lg:max-w-4xl print:space-y-2">
          <div className="mt-5 flex flex-col items-center justify-center  ">
            <Image
              src={
                "https://i1.pickpik.com/photos/484/344/909/dog-animal-preview.jpg"
              }
              height={800}
              width={800}
              alt={""}
              className="rounded-md"
              content="center"
            />
            <p className="mt-1 text-sm text-gray-400">Image description</p>
          </div>
          <h1 className="text-[22px] font-semibold text-gray-300  ">
            Blog title , Should be little long like the title itself describes
            half the things
          </h1>
          <p>Content here</p>
          <p className="text-justify text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            aliquet nibh, rhoncus condimentum augue. Nullam ornare ipsum ut
            tincidunt feugiat. Vivamus suscipit, lectus bibendum sollicitudin
            iaculis, velit odio finibus nibh, eu aliquet velit purus nec ex. Nam
            eu tempus velit. Maecenas vel purus nisi. Aenean rhoncus tristique
            ex, at placerat nisi gravida quis. Nunc consectetur ligula sapien,
            ut dapibus turpis eleifend id. Proin vehicula ultrices nulla, ac
            aliquam nibh volutpat vitae. Pellentesque egestas nunc a
            sollicitudin efficitur. Quisque tellus eros, rhoncus et mi non,
            lobortis facilisis risus. Vivamus ac aliquet nunc. Mauris vestibulum
            malesuada nisi nec luctus. Integer fermentum quis dolor in
            hendrerit. Vestibulum dapibus nec ligula et viverra. Vestibulum a
            dui tristique, dictum nisi et, fringilla neque. Etiam laoreet ex eu
            laoreet elementum. Phasellus ullamcorper pellentesque arcu eget
            interdum. Ut commodo enim sit amet sodales iaculis. Suspendisse
            congue sem ligula, at ornare nunc malesuada rhoncus. Donec consequat
            pulvinar consequat. Nam volutpat euismod ante sit amet congue. Nulla
            eu risus non magna auctor condimentum eu ac sapien. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Integer tempor elit odio, et condimentum metus tempor
            eget. Ut purus quam, condimentum eget mauris id, consectetur
            interdum justo. Sed in vehicula ligula. Morbi ex justo, facilisis ut
            felis sed, maximus molestie leo. Aenean dictum enim a turpis
            blandit, eu blandit ante pellentesque. Vestibulum aliquet mi eu erat
            dictum varius. Fusce eget eros nibh. Nulla purus turpis, malesuada
            et orci eu, interdum luctus mauris. Aenean vel metus lectus. Fusce
            convallis consequat quam ac pretium. Maecenas eleifend odio sed leo
            aliquet placerat. Pellentesque lectus augue, lacinia eu mi ut,
            faucibus faucibus sapien. Nam sed diam malesuada, iaculis ex quis,
            tincidunt nisi. Nunc interdum lacus rutrum metus mollis, in
            ullamcorper elit varius. Aenean posuere euismod nulla ac vehicula.
            Ut euismod ipsum nisl, vitae gravida est molestie at. Fusce enim
            justo, aliquet sit amet dapibus fermentum, maximus in quam. Aliquam
            pellentesque pellentesque turpis, quis pulvinar elit sagittis
            malesuada. Praesent sit amet est quis purus finibus molestie. Donec
            molestie est tortor, sed mattis ligula efficitur eget. Quisque purus
            lacus, vulputate ac felis et, scelerisque tempus quam. Morbi in arcu
            mattis, feugiat justo eget, placerat est. Mauris vel metus vel ante
            hendrerit mollis. Pellentesque a nisi lacinia, tincidunt tortor
            quis, semper lacus. Suspendisse pellentesque faucibus massa, id
            vehicula magna sodales id. Etiam fermentum quam non dolor lobortis
            aliquet. Aliquam dignissim nisi ex, nec varius est congue quis.
            Quisque lectus nunc, maximus eu libero vitae, congue interdum dolor.
            Nulla aliquet mollis faucibus. Nullam aliquet in dui ac malesuada.
            Phasellus vel venenatis ante. Mauris lorem mi, eleifend id nisl id,
            ornare facilisis justo. Cras non blandit justo. Aliquam faucibus
            rutrum diam et ornare. Aliquam interdum ut ex eget lacinia. Proin
            eleifend urna vel pulvinar pretium. Sed sit amet tempor risus, a
            hendrerit risus. Praesent a metus ut tortor posuere consectetur.
            Fusce mi nunc, congue sed metus at, ultricies pellentesque libero.
            Cras facilisis, orci nec mollis aliquet, mi leo malesuada ex, non
            volutpat enim orci id ipsum. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris quis
            eros sem. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Suspendisse vulputate quis velit sit amet ultrices. Nunc
            finibus, ante vel rhoncus suscipit, urna velit ullamcorper magna,
            quis feugiat elit elit accumsan risus. Sed a lectus iaculis,
            imperdiet sapien vitae, interdum nibh. Mauris in nisi mollis,
            consectetur orci et, condimentum mi. Cras diam nulla, egestas
            ullamcorper sollicitudin vitae, sagittis non nisl. Vivamus quis
            dolor libero. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum leo ipsum,
            blandit a auctor ut, tincidunt at erat. Phasellus vestibulum mi
            nunc, a molestie mauris rhoncus quis. Cras et erat in augue placerat
            tempor. Sed eu risus lorem. Integer luctus mi nisl, non lacinia
            tellus fermentum eget. Nullam nec iaculis felis. Etiam libero elit,
            laoreet id fermentum at, lobortis nec diam. Pellentesque a placerat
            nisi, vitae semper lectus. Sed augue lacus, fermentum lacinia felis
            sed, pretium elementum arcu. Nunc sit amet est sed nibh pulvinar
            finibus. Etiam tincidunt sem at ipsum suscipit, ut maximus ipsum
            semper. Nullam eget efficitur risus. Proin facilisis lectus vel
            dolor placerat, in faucibus leo tincidunt. Pellentesque mollis velit
            lacinia quam condimentum ultrices. Aenean aliquet, mauris ut
            faucibus bibendum, lacus risus volutpat est, nec scelerisque ipsum
            nunc eu mi. Quisque eget rhoncus est, non bibendum arcu. Nam
            bibendum tristique dapibus. Aenean viverra neque quam, eget dapibus
            lacus convallis et. Fusce nec porttitor leo. Pellentesque vel felis
            laoreet, pretium nunc vitae, tristique magna. Aliquam quis varius
            urna. Mauris vel mollis neque. Quisque volutpat massa ligula, a
            feugiat libero rhoncus eu. Donec scelerisque, purus non ultricies
            vehicula, urna arcu fringilla ipsum, quis mattis erat erat malesuada
            erat. Curabitur nec tempor ligula. Nullam ac eros arcu. Maecenas
            sapien sapien, venenatis nec quam vitae, suscipit faucibus ipsum.
            Maecenas vel sem mollis, commodo ipsum sed, vehicula libero. Aliquam
            a urna id justo pretium fermentum sit amet sed quam. Aenean massa
            ipsum, sagittis non lobortis sit amet, tincidunt non ante. Proin vel
            velit risus. Proin ornare, dui in efficitur tempor, arcu justo
            iaculis ante, ut consectetur mauris erat in justo. Maecenas
            elementum molestie pharetra. Vivamus vel mollis lorem. Sed placerat,
            ec tincidunt rutrum. Nulla ac lectus eu tellus egestas cursus. Donec
            ut condimentum lacus. Donec tempor malesuada augue, quis condimentum
            nisi. Fusce euismod vitae ante non sagittis. Donec non enim
            lobortis, mattis sem ut, consectetur erat. Nulla facilisi. Donec
            fermentum nisi sem, ut varius nunc egestas vel. Pellentesque
            sollicitudin nisl sed mauris suscipit, faucibus aliquet neque
            laoreet. Mauris
          </p>
        </div>
        <div className="mb-10  mt-5 flex flex-col gap-2">
          <h1 className="mb-2 font-semibold">Suggested Reads</h1>

          <div className="flex w-full max-w-4xl gap-4 rounded-lg border border-gray-700 bg-black p-3">
            <div className="h-40 w-40 flex-shrink-0 rounded-md bg-blue-950"></div>

            <div className="flex  flex-grow flex-col justify-between py-6">
              <h1 className="text-lg font-semibold">
                Blog title, Should be little long like the title itself
                describes half the things
              </h1>
              <p className="mt-2 w-full text-[16px] text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                quis aliquet nibh, rhoncus condimentum augue. Nullam ornare
                ipsum ut tincidunt feugiat.
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-4xl gap-4 rounded-lg border border-gray-700 bg-black p-3">
            <div className="h-40 w-40 flex-shrink-0 rounded-md bg-blue-950"></div>

            <div className="flex  flex-grow flex-col justify-between py-6">
              <div className="h-4 w-full bg-blue-950"></div>
              <div className="flex flex-col justify-between gap-1">
                <div className="h-2 w-full bg-blue-950"></div>
                <div className="h-2 w-full bg-blue-950"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
